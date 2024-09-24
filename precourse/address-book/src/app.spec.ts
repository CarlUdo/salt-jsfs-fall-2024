import { strictEqual } from "assert";
import request from "supertest";
import { app } from "./api";

describe('Test the people api to the limits...', () => {
  it('get all persons', done => {
    request(app)
      .get('/api/people/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.length, 100))
      .expect(200, done);
  });
});
