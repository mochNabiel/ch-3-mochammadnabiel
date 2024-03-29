const usecaseCar = require("../usecase/cars");

exports.viewPage = (req, res) => {
  res.render("rent-car", { layout: "main-layout" });
};

exports.searchCar = (req, res) => {
  const data = usecaseCar.searchCar(req);
  res.render("rent-car", { cars: data, layout: "main-layout" });
};
