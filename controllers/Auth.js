'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.loginClient = function loginClient (req, res, next, body) {
  Auth.loginClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signUpClient = function signUpClient (req, res, next, body) {
  Auth.signUpClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
