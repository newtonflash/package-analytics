const router = require('express').Router();
const controller = require('./controller');

router.get('/', function(req, res){
    try {
        let reqParams = req.body;
        controller.updateRecords(req.body,
            function (err, result) {
                if (err) {
                    console.error('Error in updating records \n', err);
                    res.status(400).send({error: 'Something went wrong!!!'});
                    return;
                }
                res.send("success");
            });
    } catch (err) {
        console.error('not sure what happened!!!', err);
        res.status(500).send({error: 'wrong server'});
    }
});


module.exports = router;