import { strictEqual }from 'assert';
import request from 'supertest';
import { app } from './api.js'

describe('developer API should have endpoints too', () => {
  it('get all developers', done => {
    // act and assert
    request(app)
      .get('/api/developers/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.length, 2))
      .expect(200, done);
  });

  it('get user with id 1', done => {
    request(app)
      .get('/api/developers/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => strictEqual(res.body.name, 'John Doe'))
      .expect(200, done);
  });

  it('create new user', done => {
    request(app)
      .post('/api/developers/')
      .send({
        "name": 'Carl',
        "email": 'c@b.com'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Location', /\/api\/developers\/3/)
      .expect(res => strictEqual(res.body.name, 'Carl'))
      .expect(201, done)
  })
});
