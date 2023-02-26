const { Router } = require("express");

const router = new Router();

const { getUser, changePassword, editProfile } = require("../controllers/user");

router.get("/:id", getUser);
router.post("/change-password", changePassword);
router.post("/edit-profile/:id", editProfile);

module.exports = router;
