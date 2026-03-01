const User = require("../models/User");
const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");


// 🔹 Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPatients = await Patient.countDocuments();
    const totalAppointments = await Appointment.countDocuments();

    res.json({
      success: true,
      data: {
        totalUsers,
        totalPatients,
        totalAppointments
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Monthly Appointments (For Chart.js / Recharts)
exports.getMonthlyAppointments = async (req, res) => {
  try {
    const data = await Appointment.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json(data);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Update Subscription Plan (SaaS Feature)
exports.updateSubscriptionPlan = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { subscriptionPlan: req.body.subscriptionPlan },
      { new: true }
    ).select("-password");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json({
      success: true,
      message: "Subscription updated",
      data: user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};