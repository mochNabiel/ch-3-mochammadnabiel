const express = require("express");
const carsRoute = require("./cars");
const rentCarRoute = require("./rent-car");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { layout: "main-layout" });
  res.json({ message: "ping successfully" });
});
router.use("/cars", carsRoute);
router.use("/rent-car", rentCarRoute);

module.exports = router;
