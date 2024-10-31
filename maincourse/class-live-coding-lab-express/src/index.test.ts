import { deepEqual } from "node:assert/strict";
import request from "supertest"
import test from "node:test";
import express from "express";

const app = express();

test("Supertest works!", async () => {
    

    app.get("/status", (req, res) => {
        res.status(200).json({status: "ready"});
    });

    const result = await request(app).get("/status");

    deepEqual(result.status, 200);
    deepEqual(result.body, {status: "ready"});
})