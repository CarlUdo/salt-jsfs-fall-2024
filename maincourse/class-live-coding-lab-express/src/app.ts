import express from "express";
import { createPancakesFeature } from "./features";

export function createApp() {
    const app = express();

    app.get("/status", (req, res) => {
      res.status(200).json({status: "ready"});
    });

    const pancakesFeature = createPancakesFeature();

    app.use("/api/v1/pancakes", pancakesFeature.getRouter())

    return app;
}