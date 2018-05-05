const mongoose = require('mongoose');


let schema = new mongoose.Schema({
    ip:         { type: String},
    timeStamp:  { type: Number, default: null },
    systemInfo: {
            os : { type: String}
    },
    packageInfo: {
        name :      { type: String, required: true},
        version :   { type: String},
        description:{ type: String},
        author :    { type: String},
        license:  { type: String},
        dependencies: [{
            name: {type: String, required: true},
            version: {type: String, required: true}
        }],
        devDependencies: [{
            name: {type: String, required: true},
            version: {type: String, required: true}
        }]
    }

}, { collection: 'quasars' });


module.exports = mongoose.model('packageData', schema);