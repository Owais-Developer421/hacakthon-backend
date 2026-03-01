const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getDashboardStats,
  getMonthlyAppointments,
  updateSubscriptionPlan
} = require("../controllers/adminController");


// All routes below require Admin role
router.use(protect);
router.use(authorizeRoles("Admin"));


// Get all users
router.get("/users", getAllUsers);


// Dashboard Stats
router.get("/stats", getDashboardStats);


// Monthly Appointments Analytics
router.get("/appointments/monthly", getMonthlyAppointments);


// Update User Subscription (Free → Pro)
router.put("/subscription/:id", updateSubscriptionPlan);


module.exports = router;