// routes/enquiry.js
const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
  const { name, email, subject, category } = req.body;

  try {
    const newEnquiry = new Enquiry({ name, email, subject, category });
    await newEnquiry.save();

    res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (err) {
    console.error("❌ Enquiry Submission Error:", err.message);
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
});

module.exports = router;
