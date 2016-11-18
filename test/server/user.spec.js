const request = require('supertest'),
  express = require('express'),
  app = express();


describe('User', () => {
  it('should return status 200', () => {
    request(app)
    .get('/')
    .expect(200);
  });
});
