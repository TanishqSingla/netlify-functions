const express = require("express");
const serverless = require("serverless-http");
const router = require("../../router/router")

const app = express();
app.use("/api/", router);

module.exports.handler = serverless(app);
