const { Router } = require("express");
const router = Router();

// import routes
const authRoutes = require("./auth");
//const answerRoutes = require("");
const userRoutes = require("./user");
//const institutionRoutes = require("");
//const questionRoutes = require("");

// config router
router.get("/", (req, res) => res.status(200).json("Hello World"));
router.use("/auth", authRoutes);
//router.use("", answerRoutes);
router.use("/user", userRoutes);
//router.use("", institutionRoutes)
//router.use("", questionRoutes)

module.exports = router;
