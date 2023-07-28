const express = require("express");
const router = express.Router();

const routesAPI = require("./router.api");

router.use("/api/v1", routesAPI);

module.exports = router;
