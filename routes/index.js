const express = require("express");
const router = express.Router();

const home_controller = require("../controllers/home_controller");

router.get("/", home_controller.home);
router.post("/newTask", home_controller.create);
router.post("/delete", home_controller.delete);
router.get("/deletind", home_controller.deletind);
module.exports = router