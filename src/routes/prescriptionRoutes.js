const express = require("express");
const router = express.Router();
const {
  createPrescription,
  getPatientHistory
} = require("../controllers/prescriptionController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("Doctor"),
  createPrescription
);

router.get(
  "/:patientId",
  protect,
  getPatientHistory
);

module.exports = router;