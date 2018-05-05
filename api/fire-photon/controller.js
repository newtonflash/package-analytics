const mongoService = require('./mongo-service');
const packageService = require('./mongo-service');
// const model = require('./schema');

const updateRecords = function (data, responseCB){

};

const addPackage = function addPackage(data, done) {
    packageService.addPackage(data, done);
};

module.exports = {
    updateRecords,
    addPackage
};