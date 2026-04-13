const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
app.use(express.json());
const applicationValidation = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),
  body("birthdate")
    .isISO8601()
    .withMessage("Birthdate must be a valid date (YYYY-MM-DD)"),
  body("grades")
    .isArray({ min: 1 })
    .withMessage("At least one grade is required"),
  body("grades.*")
    .isNumeric()
    .withMessage("All grades must be numbers"),
  body("essay")
    .isLength({ min: 100 })
    .withMessage("Essay must be at least 100 characters"),
  body("recommendationLetter")
    .isURL()
    .withMessage("A valid recommendation letter link is required"),
  body("portfolioLink")
    .isURL()
    .withMessage("A valid portfolio link is required for art applicants")
];

app.post("/apply", applicationValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      errors: errors.array()
    });
  }
  res.status(200).json({
    status: "success",
    message: "Application received successfully",
    applicant: req.body.name
  });
});

app.listen(3000, () => {
  console.log("BrightFuture University Admissions running at http://localhost:3000");
});