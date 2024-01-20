const express = require("express");
const serverless = require("serverless-http");

const router = require("../router");

const app = express();

app.use("/api/", router);
app.get("/hello-world", (req, res) => res.status(200).json({ "hello": "world" }));

export const handler = serverless(app);

