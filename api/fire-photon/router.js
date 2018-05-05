const router = require('express').Router();
const packageController = require('./controller');
const errorMsg = "Something went wrong behind the scenes.";

router.get('/', function(req, res){
    try {
        let reqParams = req.body;
        packageController.updateRecords(req.body,
            function (err, result) {
                if (err) {
                    console.error('Error in updating records \n', err);
                    res.status(400).send({error: errorMsg});
                    return;
                }
                res.send(result);
            });
    } catch (err) {
        console.error(errorMsg, err);
        res.status(500).send({error: 'wrong server'});
    }
});

router.post('/fire-photon', (req, res) => {
    try {
        let newPackage = req.body;
        packageController.addPackage(newPackage, (err, result) => {
            if(err) {
                console.error('Something went wrong behind the scenes: ', err);
                res.status(400).send({error: "Something went wrong, please check and try again."});
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