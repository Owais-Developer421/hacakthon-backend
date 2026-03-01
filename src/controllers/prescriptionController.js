const Prescription = require("../models/Prescription");

// CREATE PRESCRIPTION
exports.createPrescription = async (req, res) => {
  const { patientId, medicines, notes } = req.body;

  const prescription = await Prescription.create({
    patientId,
    doctorId: req.user._id,
    medicines,
    notes
  });

  res.status(201).json(prescription);
};

// MEDICAL HISTORY TIMELINE
exports.getPatientHistory = async (req, res) => {
  const history = await Prescription.find({
    patientId: req.params.patientId
  }).sort({ createdAt: -1 });

  res.json(history);
};