const { Router } = require("express");

const router = new Router();

const { getUser, changePassword } = require("../controllers/user");

router.get("/:id", getUser);
router.post("/change-password", changePassword);

module.exports = router;
