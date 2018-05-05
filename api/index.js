const router = require('express').Router();

router.use('/fire-photon', require('./fire-photon'));

module.exports = router;