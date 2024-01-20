const router = require("express").Router();

router.get("/healthcheck", (_req, res) => res.status(200).json({ status: "alive" }));

module.exports = router;
