const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// ADD JOB
router.post("/add", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.json({ message: "Job Added" });
    } catch (err) {
        res.json({ message: "Error adding job" });
    }
});

// GET ALL JOBS
router.get("/", async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// ✅ DELETE JOB (IMPORTANT)
router.delete("/:id", async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: "Job Deleted Successfully" });
    } catch (err) {
        res.json({ message: "Error deleting job" });
    }
});

module.exports = router;