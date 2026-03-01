const Patient = require("../models/Patient");

// CREATE PATIENT
exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender, contact } = req.body;

    const patient = await Patient.create({
      name,
      age,
      gender,
      contact,
      createdBy: req.user._id
    });

    res.status(201).json({ success: true, data: patient });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PATIENTS
exports.getPatients = async (req, res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
};