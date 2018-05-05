const mongoose = require('mongoose');


let schema = new mongoose.Schema({
    ip:         { type: String},
    timeStamp:  { type: Number, default: null },
    systemInfo: {
            os : { type: String}
    },
    packageInfo: {
        name :      { type: String},
        version :   { type: String},
        description:{ type: String},
        author :    { type: String},
        license:  { type: String},
        dependencies: {type: Object},
        devDependencies: { type: Object}
    }

}, { collection: 'quasars' });


module.exports = mongoose.model('packageData', schema);