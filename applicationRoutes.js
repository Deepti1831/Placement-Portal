const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// APPLY JOB
router.post("/apply", async (req, res) => {
    const { jobId, userEmail } = req.body;

    const exists = await Application.findOne({ jobId, userEmail });

    if (exists) {
        return res.json({ message: "Already Applied" });
    }

    const application = new Application({ jobId, userEmail });
    await application.save();

    res.json({ message: "Applied Successfully" });
});

// GET USER APPLICATIONS
router.get("/", async (req, res) => {
    const data = await Application.find();
    res.json(data);
});

module.exports = router;