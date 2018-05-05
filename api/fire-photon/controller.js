const packageService = require('./mongo-service');

const addPackage = function addPackage(data, done) {
    packageService.addPackage(data, done);
};

module.exports = {

    addPackage
};