const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["Admin", "Doctor", "Receptionist", "Patient"],
    default: "Patient"
  },
  subscriptionPlan: {
    type: String,
    enum: ["Free", "Pro"],
    default: "Free"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);