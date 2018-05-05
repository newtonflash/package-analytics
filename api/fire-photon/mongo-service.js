const packageData = require('./schema');

const getPackages = function getPackages(done) {
    done(null, {});
};

const addPackage = function addPackage(newPackage, done) {
    console.log('newPackage:: ', newPackage)
    done(null, {});
}

module.exports = {
    getPackages,
    addPackage
}