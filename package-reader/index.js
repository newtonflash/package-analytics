'use strict';

module.exports = function () {
    const fs = require('fs');

    const contents = fs.readFileSync('../package.json', 'utf8');
    console.log(contents);
}