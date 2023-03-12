const { Router } = require("express");
const router = Router();

// import routes
const authRoutes = require("./auth");
const userRoutes = require("./user");
// config router
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
