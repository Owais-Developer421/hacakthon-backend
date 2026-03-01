const Appointment = require("../models/Appointment");

// CREATE APPOINTMENT
exports.createAppointment = async (req, res) => {
  const { patientId, doctorId, date } = req.body;

  // Check if doctor busy
  const existing = await Appointment.findOne({
    doctorId,
    date
  });

  if (existing)
    return res.status(400).json({ message: "Doctor busy at this time" });

  const appointment = await Appointment.create({
    patientId,
    doctorId,
    date
  });

  res.status(201).json(appointment);
};

// UPDATE STATUS
exports.updateStatus = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(appointment);
};