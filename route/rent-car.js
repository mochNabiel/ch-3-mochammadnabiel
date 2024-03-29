const express = require("express");
const rentCarController = require("../controller/rent-car");

const router = express.Router();

router.get("/", rentCarController.viewPage);
router.post("/", rentCarController.searchCar);

module.exports = router;
