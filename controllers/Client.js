'use strict';

var utils = require('../utils/writer.js');
var Client = require('../service/ClientService');

module.exports.cancelOrder = function cancelOrder (req, res, next, body, id_order) {
  Client.cancelOrder(body, id_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientSelfData = function clientSelfData (req, res, next) {
  Client.clientSelfData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmOrder = function confirmOrder (req, res, next, id_order) {
  Client.confirmOrder(id_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.detailsOrders = function detailsOrders (req, res, next, id_order) {
  Client.detailsOrders(id_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.finishOrder = function finishOrder (req, res, next, id_order) {
  Client.finishOrder(id_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.freelancerData = function freelancerData (req, res, next, job_id) {
  Client.freelancerData(job_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.historyOrders = function historyOrders (req, res, next) {
  Client.historyOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderPayment = function orderPayment (req, res, next, body) {
  Client.orderPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymentMethod = function paymentMethod (req, res, next) {
  Client.paymentMethod()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportViolation = function reportViolation (req, res, next, body) {
  Client.reportViolation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitOrder = function submitOrder (req, res, next, body, id_freelance) {
  Client.submitOrder(body, id_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksList = function tasksList (req, res, next, id_order) {
  Client.tasksList(id_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
