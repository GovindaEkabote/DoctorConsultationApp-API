const express = require("express");
const { login, logout, verifyOtp, getUserAnalytics, resetAnalytics } = require("../controllers/userController");
const { IsAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/post/login").post(login);
router.route("/verify-otp").post(verifyOtp);
router.route("/get/logout").get(IsAuthenticatedUser, logout);
router.route("/get/analytics").get(getUserAnalytics)
router.route("/get/reset-analytics").get(resetAnalytics)

module.exports = router;
