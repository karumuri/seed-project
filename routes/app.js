var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;



//this is just for the testing the application to get the data and use the data
// we use only single page application so we use angular for routing


// var User=require('../models/user')
/*router.get('/', function (req, res, next) {
    User.findOne({},function (err,doc) {
        if(err){
            return res.send('Error!');
        }
        res.render('node',{email:doc.email});
    });

});

router.post('/', function (req, res, next) {
    var email=req.body.email;
    var user = new User({
        firstName:'Chaitu',

        lastName:'Karum',
        password:'password',
        email:email,

    });
    user.save();
    res.redirect('/');
});
*/

