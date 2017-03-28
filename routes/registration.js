var express = require('express');
var router = express.Router();
var User = require('../models/User');


/* GET home page. */
router.get('/registration', function(req, res, next) {
  	res.render('registration', { title: 'Express' });
});
router.post('/registration/checkuser', function(req, res, next) {
	console.log('Get!');
	User.find({login: req.body.login}, function(err, users){
		if (err)
			console.log(err);
		var data = {};
		data.check = true;
		if (!users)
			data.check = false;
		res.send(data);
	});
});
router.post('/registration', function(req, res, next) {
	var user = new User({login: req.body.login, password: req.body.password});
	user.save(function(err, saved) {
		if (err)
			console.log(err);
		console.log(saved);
	});
});

module.exports = router;