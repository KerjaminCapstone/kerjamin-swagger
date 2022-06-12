'use strict';

var utils = require('../utils/writer.js');
var Freelancer = require('../service/FreelancerService');

module.exports.addTask = function addTask (req, res, next, body, id_Order_freelance) {
  Freelancer.addTask(body, id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.arrangeOffering = function arrangeOffering (req, res, next, body, id_Order_freelance) {
  Freelancer.arrangeOffering(body, id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmOffering = function confirmOffering (req, res, next, id_Order_freelance) {
  Freelancer.confirmOffering(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTask = function deleteTask (req, res, next, id_Order_freelance, id_task) {
  Freelancer.deleteTask(id_Order_freelance, id_task)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.freelanceSelfData = function freelanceSelfData (req, res, next) {
  Freelancer.freelanceSelfData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArrangement = function getArrangement (req, res, next, id_Order_freelance) {
  Freelancer.getArrangement(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCoordinate = function getCoordinate (req, res, next, id_Order_freelance) {
  Freelancer.getCoordinate(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offeringDetail = function offeringDetail (req, res, next, id_Order_freelance) {
  Freelancer.offeringDetail(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offeringHistory = function offeringHistory (req, res, next) {
  Freelancer.offeringHistory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offeringList = function offeringList (req, res, next) {
  Freelancer.offeringList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.refreshStatus = function refreshStatus (req, res, next, id_Order_freelance) {
  Freelancer.refreshStatus(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rejectOffering = function rejectOffering (req, res, next, id_Order_freelance) {
  Freelancer.rejectOffering(id_Order_freelance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAddress = function updateAddress (req, res, next, body) {
  Freelancer.updateAddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
