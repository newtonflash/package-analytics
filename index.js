const express = require('express');
const PORT = process.NODE_PORT | 5050;

let app = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;