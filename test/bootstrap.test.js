const request = require('supertest');
const sails = require('sails');
const chai = require('chai');
const dotenv = require('dotenv');

before(done =>
    sails.lift({}, err => {
        dotenv.config();
        global.app = request(sails.hooks.http.app);
        global.assert = chai.assert;
        global.expect = chai.expect;
        global.should = chai.should();
        done(err, sails);
    })
);

after(done => sails.lower(done));
