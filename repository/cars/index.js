const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getAllCars = () => {
  return cars.map((car) => car);
};

exports.getCarById = (req) => {
  const { id } = req?.params;
  const car = cars[id - 1];

  return car;
};

exports.createCar = (req) => {
  const newCar = {
    id: uuidv4(),
    ...req.body,
  };

  cars.push(newCar);

  return newCar;
};

exports.updateCar = (req) => {
  const { id } = req?.params;
  const index = parseInt(id) - 1; 
  const updatedCar = {
    id: uuidv4(),
    ...req.body,
  };

  if (index >= 0 && index < cars.length) { 
    cars[index] = updatedCar;
  }

  return cars;
};


exports.deleteCar = (req) => {
  const { id } = req?.params;

  index = cars.findIndex((car) => car.id === id);
  const data = cars[index];
  cars.splice(index, 1);
  return data;
};
