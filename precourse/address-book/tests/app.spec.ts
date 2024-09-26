import { strictEqual, ok } from "assert";
import request from "supertest";
import { app } from "../src/api";
import { describe, it } from 'mocha';

const route = '/api/people/';

// -- Note! Every time a new database is generated - tests must be updated accordingly -- //

describe('Test the people api to the limits...', () => {
  it('get all persons', done => {
    request(app)
      .get(`${route}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.length, 100))
      .expect(200, done);
  });

  it(`get person with a specific userId`, done => {
    request(app)
      .get(`${route}54984823-5fe2-4ef7-b76a-2c9af0f4373c`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.fullName, 'Phyllis Krajcik'))
      .expect(200, done);
  });

  it('create new person', done => {
    request(app)
      .post(`${route}`)
      .send({
        "fullName": "Carl Bieneck",
        "email": "carl@wbsweden.com",
        "address": "Mumindalen"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Location', /\/api\/developers\//)
      .expect(res => ok(res.body.userId, 'userId property should be present'))
      .expect(res => strictEqual(res.body.fullName, 'Carl Bieneck'))
      .expect(201, done);
  });

  it('update person partially', done => {
    request(app)
      .patch(`${route}3418bb2d-b0a2-4fd2-8234-d0bfb67dae79`)
      .send({
        "email": "carl@bieneck.com"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.email, 'carl@bieneck.com'))
      .expect(200, done);
  });

  it('update person fully', done => {
    request(app)
      .put(`${route}74d992a5-7d35-4dbf-bd7f-3757fad1ac16`)
      .send({
        "fullName": "Lilla My",
        "email": "lillamy@mumindalen.fi",
        "address": "Muminhuset, Mumindalen"
      })
      .set('Accept', 'application/json')
      .expect(res => strictEqual(res.body.fullName, 'Lilla My'))
      .expect(200, done);
  });

  it('delete person with a specific userId', done => {
    request(app)
      .delete(`${route}e29f1aee-e293-421b-a4f5-dc451eb44d01`)
      .set('Accept', 'application/json')
      .expect(204, done);
  });
});
