const express = require("express");
const router = express.Router();
const {
  createPatient,
  getPatients
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const { checkPatientLimit } = require("../middleware/subscriptionMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("Admin", "Receptionist"),
  checkPatientLimit,
  createPatient
);

router.get(
  "/",
  protect,
  authorizeRoles("Admin", "Doctor", "Receptionist"),
  getPatients
);

module.exports = router;