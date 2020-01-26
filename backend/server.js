const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();  

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
 
//giving db details
const uri = process.env.DB_URI; 
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log("Mongo DB database connection established");
});

const usersRouter = require("./routes/users");



app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});