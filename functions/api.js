import express, { Router } from 'express';
import serverless from 'serverless-http';

const app = express()
const router = Router();

router.get("/healthcheck", (_req, res) => res.status(200).json({ status: "alive" }));
app.use("/api/", router);

export const handler = serverless(app);
