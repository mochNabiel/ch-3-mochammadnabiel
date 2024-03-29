const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.searchCar = (req) => {
  const { transmisi, tanggal, capacity } = req.body;
  const carsData = cars;

  const dateHandler = (tanggal) => {
    const userDate = new Date(tanggal);
    const currentDate = new Date("2022-03-23");
    return userDate.getTime() >= currentDate;
  };

  const searchCars = (transmisi, tanggal, capacity) => {
    if (transmisi === "All") {
      if (!capacity || capacity == "") {
        return carsData.filter((car) => car.available == dateHandler(tanggal));
      } else {
        return carsData.filter(
          (car) =>
            car.capacity == capacity && car.available == dateHandler(tanggal)
        );
      }
    } else {
      if (!capacity || capacity == "") {
        return carsData.filter(
          (car) =>
            car.available == dateHandler(tanggal) &&
            car.transmission == transmisi
        );
      } else {
        return carsData.filter(
          (car) =>
            car.capacity == capacity &&
            car.available == dateHandler(tanggal) &&
            car.transmission == transmisi
        );
      }
    }
  };

  const data = searchCars(transmisi, tanggal, capacity);
  return data;
};

exports.getAllCars = () => {
  return cars.map((car) => {
    return { ...car };
  });
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

  return updatedCar;
};

exports.deleteCar = (req) => {
  const { id } = req?.params;

  const index = cars.findIndex((car) => car.id === id);
  if (index === -1) {
    return null;
  }

  const data = cars.splice(index, 1)[0];
  return data;
};
