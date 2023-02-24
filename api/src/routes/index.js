const { Router } = require("express");
const router = Router();

// import routes
const authRoutes = require("./auth");

// config router
router.use("/auth", authRoutes);

module.exports = router;
