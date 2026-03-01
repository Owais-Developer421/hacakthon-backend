const Patient = require("../models/Patient");

exports.checkPatientLimit = async (req, res, next) => {
  if (req.user.subscriptionPlan === "Free") {

    const count = await Patient.countDocuments({
      createdBy: req.user._id
    });

    if (count >= 10) {
      return res.status(403).json({
        message: "Free plan limit reached"
      });
    }
  }

  next();
};