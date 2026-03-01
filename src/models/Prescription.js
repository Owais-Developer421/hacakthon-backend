const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  medicines: [
    {
      name: String,
      dosage: String
    }
  ],
  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Prescription", prescriptionSchema);