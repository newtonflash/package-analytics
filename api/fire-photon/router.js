const router = require('express').Router();
const packageController = require('./controller');
const errorMsg = "Something went wrong behind the scenes.";

router.post('/', (req, res) => {
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