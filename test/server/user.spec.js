const app = require('../../server/index'),
  request = require('supertest')(app),
  assert = require('chai').assert,
  db = require('../../server/models'),
  fakeData = require('../fake-data');

describe('User Actions', () => {
  let roleId;
  before((done) => {
    request.post('/users/role')
      .send(fakeData.newRole)
      .end((err, res) => {
        if (!err) {
          roleId = res.body.role.id;
        }
        done();
      });
  });

  after((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        done();
      });
  });

  describe('POST /users create account', () => {
    it('should create account if all details are available', (done) => {
      fakeData.accurateUser.roleId = roleId;
      request.post('/users')
        .send(fakeData.accurateUser)
        .expect(200)
        .end((error, res) => {
          if (!error) {
            assert.equal(res.body.done, true);
          }
          done();
        });
    });

    it('does not create account without role', (done) => {
      request.post('/users')
      .send(fakeData.accurateUser)
      .expect(401)
      .end((error, res) => {
        if (!error) {
          assert.equal(res.body.done, false);
        }
        done();
      });
    });

    it('does not create account if first name is missing', (done) => {
      request.post('/users')
      .send(fakeData.noFirstName)
      .expect(401)
      .end((error, res) => {
        if (error) {
          return done(error);
        }
        assert.equal(res.body.done, false);
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
        assert.equal(res.body.done, false);
        done();
      });
    });
  });
});
