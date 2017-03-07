const mocha = require('mocha');
const chai = require('chai');
const request = require('supertest');

const http = require('http');
const app = require('../app');

const expect = chai.expect;

describe('GET /', () => {
  it('returns html', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, done)
  });

  it('contains the name of the app', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.text.match(/Hello World/i)).to.exist;
        done();
      });
  });
});
