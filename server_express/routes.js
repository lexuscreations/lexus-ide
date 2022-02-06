const router = require("express").Router();
const { compiler } = require("./controller");

router.post("/api/v1/ide/compiler", compiler);

module.exports = router;