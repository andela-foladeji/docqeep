const app = require('../../server/index'),
  request = require('supertest')(app),
  assert = require('assert'),
  fakeData = require('../fake-data');

describe('User Actions', () => {
  describe('POST /users', () => {
    it('should create account if all details are available', (done) => {
      request.post('/users')
      .send(fakeData.accurateUser)
      .expect(200)
      .end((error, res) => {
        if (error) {
          return done(error);
        }
        assert.equal(res.body.isDone, true);
        done();
      });
    });

    it('should not create account if first name is missing', (done) => {
      request.post('/users')
      .send(fakeData.noFirstName)
      .expect(401)
      .end((error, res) => {
        if (error) {
          return done(error);
        }
        assert.equal(res.body.isDone, false);
        done();
      });
    });

    it('should not create account if last name is missing', (done) => {
      request.post('/users')
      .send(fakeData.noLastName)
      .expect(401)
      .end((error, res) => {
        if (error) {
          return done(error);
        }
        assert.equal(res.body.isDone, false);
        done();
      });
    });
  });
});
