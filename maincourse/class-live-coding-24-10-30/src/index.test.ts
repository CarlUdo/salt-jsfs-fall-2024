import request from "supertest";
import express from "express";
import test from "node:test";
import { z } from "zod";
import { deepEqual, strictEqual } from "assert";

const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email()
});

type User = z.infer<typeof userSchema>;

test("Zod works", () => {
  const parseResult = userSchema.safeParse({id: "abc-123", email: "me"});
  if (!parseResult.success) {
   strictEqual(parseResult.success, false);
   strictEqual(parseResult.error.errors.length, 2);
  } else {
    strictEqual(parseResult.success, true);
    deepEqual(parseResult.data, { id: 'abc-123', email: 'me' });
  }
});

test("Supertest works", () => {
  const app = express();

  app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
});

