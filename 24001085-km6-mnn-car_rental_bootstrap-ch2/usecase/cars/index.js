const carRepository = require("../../repository/cars");

exports.getAllCars = () => {
  const data = carRepository.getAllCars();
  return data;
};

exports.getCarById = (req) => {
  const data = carRepository.getCarById(req);
  return data;
};

exports.createCar = (req) => {
  const data = carRepository.createCar(req);
  return data;
};

exports.updateCar = (req) => {
  const data = carRepository.updateCar(req);
  return data;
};

exports.deleteCar = (req) => {
  const data = carRepository.getCarById(req);
  return data;
};
