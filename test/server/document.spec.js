const app = require('../../server/index'),
  request = require('supertest')(app),
  assert = require('chai').assert,
  db = require('../../server/models'),
  fakeData = require('../fake-data');

describe('Document related activities', () => {
  let userId, roleId;
  const requiredFields = ['title', 'content', 'ownerId'];
  before((done) => {
    request.post('/users/role')
      .send(fakeData.newRole)
      .end((err, res) => {
        if (!err) {
          roleId = res.body.role.id;
          fakeData.accurateUser.roleId = roleId;
          request.post('/users')
            .send(fakeData.accurateUser)
            .then((err, res) => {
              if (!err) {
                userId = res.body.user.id;
              }
            });
        }
        fakeData.document.ownerId = userId;
        done();
      });
  });

  after((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        done();
      });
  });

  describe('POST /documents create documents', () => {
    it('a new document has published date', (done) => {
      request.post('/documents')
        .send(fakeData.document)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal(res.status, 200);
          assert.property(res.body.doc, 'createdAt');
          done();
        });
    });

    it('sets access to public by default', (done) => {
      request.post('/documents')
        .send(fakeData.document)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal(res.status, 200);
          assert.equal(res.body.document.access, 'public');
          done();
        });
    });

    requiredFields.forEach((field) => {
      it(`requires ${field}`, (done) => {
        delete fakeData.document[field];
        request.post('/documents')
          .send(fakeData.document)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            assert.equal(res.status, 401);
            assert.isFalse(res.body.done);
            done();
          });
      });
    });
  });
});
