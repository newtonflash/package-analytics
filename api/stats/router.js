const router = require('express').Router();
const statController = require('./stat.controller');

router.get('/packageCount', (req, res) => {
    try {
        let reqBody = req.body;
        statController.getPackageCount(reqBody, (err, result) => {
            if(err) {
                res.status(400).send({error: "Oops!"});
                return;
            }
            res.status(200).send(result);
        });
    } catch (err) {
        console.error('Something went wrong behind the scenes: ', err);
        res.status(500).send({error: "Unexpected internal error, please try later..!"});
        return;
    }
});

module.exports = router;