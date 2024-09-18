import { strictEqual }from 'assert';
import request from 'supertest';
import { app } from './api.js'

describe('developer API should have endpoints too', () => {
  it('get all developers', done => {
    // act and assert
    request(app)
      .get('/api/developers/')
      .set('Application', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.length, 2))
      .expect(200, done);
  });

  it('get user with id 1', done => {
    request(app)
      .get('/api/developers/1')
      .set('Application', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.name, 'John Doe'))
      .expect(200, done);
  });
});
