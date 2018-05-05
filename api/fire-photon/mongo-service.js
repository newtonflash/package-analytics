const packageData = require('./schema');
const getPackages = function getPackages(done) {
    done(null, {});
};

const addPackage = function addPackage(newPackage, done) {
    let pkg = new packageData();
    let d = new Date;

    pkg.timeStamp = d.getTime();
    pkg.packageInfo.name = newPackage.name;
    pkg.packageInfo.version = newPackage.version || '1.0.0';
    pkg.packageInfo.description = newPackage.description || '';
    pkg.packageInfo.author = newPackage.author || '';
    pkg.packageInfo.license = newPackage.license || '';

    newPackage.dependencies = newPackage.dependencies || {};
    newPackage.devDependencies = newPackage.devDependencies || {};
    pkg.packageInfo.dependencies = [];
    pkg.packageInfo.devDependencies = [];

    for(var prop in newPackage.dependencies) {
        pkg.packageInfo.dependencies.push({
            name: prop,
            version: newPackage.dependencies[prop]
        });
    }

    for(var prop in newPackage.devDependencies) {
        pkg.packageInfo.devDependencies.push({
            name: prop,
            version: newPackage.devDependencies[prop]
        });
    }

    pkg.save((err, savedPkg) => {
        if(err) {
            console.error('Error in adding new product', err);
            done(err);
            return;
        }
        done(null, savedPkg);
        return;
    });
}

module.exports = {
    getPackages,
    addPackage
}