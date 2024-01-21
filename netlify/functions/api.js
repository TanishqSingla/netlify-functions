const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());
router.get("/hello", (req, res) => res.status(200).json({hello: "world"}));
app.use("/api/", router);

module.exports.handler = serverless(app);
