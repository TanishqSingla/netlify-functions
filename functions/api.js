const express = require("express");
const serverless = require("serverless-http");

const router = require("../router");

const app = express();

app.use("/api/", router);

export const handler = serverless(app);

