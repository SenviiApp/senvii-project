const { Router } = require("express");

const router = new Router();

const { getUser } = require("../controllers/user");

router.get("/", getUser);

module.exports = router;
