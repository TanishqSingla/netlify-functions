const helloController = require("../controllers/hello.js");

const router = require("express").Router();

router.get("/hello", helloController);

module.exports = router;
