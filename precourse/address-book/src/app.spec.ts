import { strictEqual, ok } from "assert";
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

  it(`get person with userId "a8b9c8d5-8989-4e8e-bfd8-9e9477c89fe1"`, done => {
    request(app)
      .get(`${route}a8b9c8d5-8989-4e8e-bfd8-9e9477c89fe1`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.fullName, 'Victor Ernser'))
      .expect(200, done);
  });

  it('create new person', done => {
    request(app)
      .post(`${route}`)
      .send({
        "fullName": 'Carl Bieneck',
        "email": 'carl@wbsweden.com',
        "address": 'Mumindalen'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Location', /\/api\/developers\//)
      .expect(res => ok(res.body.userId, 'userId property should be present'))
      .expect(res => strictEqual(res.body.fullName, 'Carl Bieneck'))
      .expect(201, done)
  });

  it('update person partially', done => {
    request(app)
      .patch(`${route}a8b9c8d5-8989-4e8e-bfd8-9e9477c89fe1`)
      .send({
        "email": "carl@bieneck.com"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.email, 'carl@bieneck.com'))
      .expect(200, done)
  });
});
