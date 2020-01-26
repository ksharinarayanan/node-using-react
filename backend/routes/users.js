const router = require('express').Router();
let User = require('../models/users.model');


router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.route('/').get( (req, res) => {
	User.find()
		.then(user => res.json(user))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	console.log("hi");
	const name = req.body.name;
	const newUser = new User({name});	

	newUser.save()
		.then(() => res.json("New user created"))
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;