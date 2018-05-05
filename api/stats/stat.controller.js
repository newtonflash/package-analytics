const statService = require('./stat.service');


const getPackageCount = function getPackageCount(query, done) {
    return statService.getPackageCount(query, done)
}

module.exports = {
    getPackageCount
}