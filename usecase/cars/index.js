const carRepository = require("../../repository/cars");

exports.searchCar = (req) => carRepository.searchCar(req);

exports.getAllCars = () => carRepository.getAllCars();

exports.getCarById = (req) => carRepository.getCarById(req);

exports.createCar = (req) => carRepository.createCar(req);

exports.updateCar = (req) => carRepository.updateCar(req);

exports.deleteCar = (req) => carRepository.deleteCar(req);
