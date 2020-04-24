const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

router.get("/userLogin", auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).sendStatus("Server Error");
    }
});
router.post(
    "/userLogin", [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email });
            if (!user) {
                console.log("The user does not exist");
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);
            if (!isMatch) {
                console.log("The password does not match");
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
            }
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;