const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get( (req, res) => {
	User.find()
		.then(user => res.json(user))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	console.log(name);
	const newUser = new User({name});	

	newUser.save()
		.then(() => res.json("New user created"))
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;