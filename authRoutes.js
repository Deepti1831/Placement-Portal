const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User Registered Successfully" });
});

// LOGIN (SESSION STYLE)
router.post("/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        res.json({
            message: "Login Success",
            user: {
                name: user.name,
                email: user.email
            }
        });
    } else {
        res.json({ message: "Invalid Credentials" });
    }
});

module.exports = router;