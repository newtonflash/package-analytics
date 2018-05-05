const mongoService = require('./mongo-service');
const packageService = require('./mongo-service');
// const model = require('./schema');

const updateRecords = function (data, responseCB){

};

const addPackage = function addPackage(data, done) {
    console.log('data: ', data)
    done(null, {});
};

module.exports = {
    updateRecords,
    addPackage
};