const app = require('../../server/index'),
  request = require('supertest')(app),
  assert = require('chai').assert,
  db = require('../../server/models'),
  fakeData = require('../fake-data');

describe('Document related activities', () => {
  let roleId, token, token2;
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
                fakeData.privateDoc.ownerId = res2.body.user.id;
                token = res2.body.token;
                fakeData.user2.roleId = roleId;
                request.post('/users')
                  .send(fakeData.user2)
                  .end((err3, res3) => {
                    if (!err3) {
                      fakeData.document.ownerId = res3.body.user.id;
                      token2 = res3.body.token;
                      done();
                    }
                  });
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
        .send(fakeData.privateDoc)
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

    it('creates a document with access set to role', (done) => {
      fakeData.roleDocument.ownerId = 1;
      request.post('/documents')
        .set({ Authorization: token })
        .send(fakeData.roleDocument)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal(res.status, 200);
          assert.isDefined(res.body.doc);
          assert.equal(res.body.doc.access, 'role');
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

  describe('GET /documents/:id to get a document details', () => {
    it('gets details for document with private access', (done) => {
      request.get('/documents/1')
        .set({ Authorization: token })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.doc.title, fakeData.privateDoc.title);
          done();
        });
    });

    it('declines access private document if not requested by owner', (done) => {
      request.get('/documents/1')
        .set({ Authorization: token2 })
        .end((err, res) => {
          assert.equal(res.status, 401);
          assert.isUndefined(res.body.doc);
          done();
        });
    });

    it('allows access if user has same role with creator', (done) => {
      request.get('/documents/3')
        .set({ Authorization: token })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.doc.title, fakeData.roleDocument.title);
          done();
        });
    });
  });

  describe('PUT /documents/:id to update a document details', () => {
    it('should update details of the document', (done) => {
      request.put('/documents/1')
        .set({ Authorization: token })
        .send(fakeData.roleDocument)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          assert.equal(res.status, 200);
          assert.equal(res.body.doc.title, fakeData.roleDocument.title);
          done();
        });
    });

    it('should prevent update of a document you didn\'t create', (done) => {
      request.put('/documents/1')
        .set({ Authorization: token2 })
        .send(fakeData.roleDocument)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          assert.equal(res.status, 401);
          assert.isUndefined(res.body.doc);
          done();
        });
    });
  });

  describe('DELETE /documents/:id to delete a document', () => {
    it('should delete a document', (done) => {
      request.delete('/documents/1')
        .set({ Authorization: token })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isTrue(res.body.done);
          done();
        });
    });

    it('shouldn\'t delete a document not created by you', (done) => {
      request.delete('/documents/2')
        .set({ Authorization: token })
        .end((err, res) => {
          assert.equal(res.status, 401);
          assert.isFalse(res.body.done);
          done();
        });
    });
  });

  describe('GET /documents to fetch all documents', () => {
    it('gets all documents the user is authorized to access', (done) => {
      request.get('/documents/')
        .set({ Authorization: token2 })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isArray(res.body.doc);
          assert.equal(res.body.doc.length, 2);
          assert.isAtLeast(res.body.doc[0].createdAt,
            res.body.doc[1].createdAt);
          done();
        });
    });

    it('gets all documents with pagination option', (done) => {
      request.get('/documents/?page=1')
        .set({ Authorization: token2 })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isArray(res.body.doc);
          assert.equal(res.body.doc.length, 2);
          assert.isAtLeast(res.body.doc[0].createdAt,
            res.body.doc[1].createdAt);
          done();
        });
    });
  });
});
