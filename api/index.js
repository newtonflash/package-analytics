const router = require('express').Router();

router.use('/fire-photon', require('./fire-photon'));
router.use('/stats', require('./stats'));

module.exports = router;