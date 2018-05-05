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
    pkg.packageInfo.dependencies = newPackage.dependencies || {};
    pkg.packageInfo.devDependencies = newPackage || {};
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