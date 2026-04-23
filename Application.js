const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
    jobId: String,
    userEmail: String,
    status: {
        type: String,
        default: "Applied"
    }
});

module.exports = mongoose.model("Application", ApplicationSchema);