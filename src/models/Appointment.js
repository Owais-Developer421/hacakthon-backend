const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: Date,
  status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);