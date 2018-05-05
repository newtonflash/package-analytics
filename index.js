const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.NODE_PORT | 5050;
const mongoConn = require('./mongoConnection')();

let app = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./api'));

module.exports = app;