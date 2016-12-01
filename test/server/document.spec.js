const app = require('../../server/index'),
  request = require('supertest')(app),
  assert = require('chai').assert,
  db = require('../../server/models'),
  fakeData = require('../fake-data');

describe('Document related activities', () => {
  let userId, roleId, token;
  const requiredFields = ['title', 'content', 'ownerId'];
  before((done) => {
    request.post('/users/role')
      .send(fakeData.role1)
      .end((err, res) => {
        if (!err) {
          roleId = res.body.role.id;
          fakeData.user.roleId = roleId;
          request.post('/users')
            .send(fakeData.user)
            .end((err2, res2) => {
              if (!err2) {
                fakeData.document.ownerId = res2.body.user.id;
                token = res2.body.token;
                done();
              }
            });
        }
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
        .set({ Authorization: token })
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

    it('does not create document without authorization token', (done) => {
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

    it('sets access to public by default', (done) => {
      request.post('/documents')
        .set({ Authorization: token })
        .send(fakeData.document)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal(res.status, 200);
          assert.equal(res.body.doc.access, 'public');
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
