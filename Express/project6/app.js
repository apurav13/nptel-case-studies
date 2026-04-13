const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
function logDischargeRequest(req, res, next) {
  req.dischargeLog = [];
  req.dischargeLog.push({
    step: "requestReceived",
    time: new Date().toISOString()
  });
  next();
}

function doctorSignoffCheck(req, res, next) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({
      status: "error",
      error: "Doctor sign-off required before discharge."
    });
  }
  req.dischargeLog.push({
    step: "doctorSignoff",
    time: new Date().toISOString()
  });
  next();
}

function pharmacyReview(req, res, next) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({
      status: "error",
      error: "Pharmacy review required before discharge."
    });
  }
  req.dischargeLog.push({
    step: "pharmacyReview",
    time: new Date().toISOString()
  });
  next();
}

function insuranceCheck(req, res, next) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({
      status: "error",
      error: "Insurance approval required before discharge."
    });
  }
  req.dischargeLog.push({
    step: "insuranceApproved",
    time: new Date().toISOString()
  });
  next();
}

function followupCheck(req, res, next) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({
      status: "error",
      error: "Follow-up appointment must be scheduled."
    });
  }
  req.dischargeLog.push({
    step: "followupScheduled",
    time: new Date().toISOString()
  });
  next();
}

app.post(
  "/discharge",
  logDischargeRequest,
  doctorSignoffCheck,
  pharmacyReview,
  insuranceCheck,
  followupCheck,
  (req, res) => {
    req.dischargeLog.push({
      step: "dischargeComplete",
      time: new Date().toISOString()
    });
    res.status(200).json({
      status: "success",
      message: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog
    });
  }
);
function errorHandler(err, req, res, next) {
  console.error("Discharge log:", req.dischargeLog);
  res.status(500).json({
    status: "error",
    error: err.message || "Internal server error"
  });
}
app.use(errorHandler);
app.listen(3000, () => {
  console.log("CityCare Hospital system running at http://localhost:3000");
});