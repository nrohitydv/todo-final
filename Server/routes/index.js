const express = require("express");
const router = express.Router();

const subTask = require("./router.api");

router.use("/subtask/api", subTask);

module.exports = router;