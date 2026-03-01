const express = require("express");
const router = express.Router();
const {
  createAppointment,
  updateStatus
} = require("../controllers/appointmentController");


router.post("/", createAppointment);
router.put("/:id", updateStatus);

module.exports = router;