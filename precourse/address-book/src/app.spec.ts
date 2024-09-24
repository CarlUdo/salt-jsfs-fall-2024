import { strictEqual } from "assert";
import request from "supertest";
import { app } from "./api";

const route = '/api/people/';

describe('Test the people api to the limits...', () => {
  it('get all persons', done => {
    request(app)
      .get(`${route}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.length, 100))
      .expect(200, done);
  });

  it(`get person with id "a8b9c8d5-8989-4e8e-bfd8-9e9477c89fe1"`, done => {
    request(app)
      .get(`${route}a8b9c8d5-8989-4e8e-bfd8-9e9477c89fe1`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.fullName, 'Victor Ernser'))
      .expect(200, done);
  });
});
