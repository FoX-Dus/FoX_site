const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');

const port = process.env.PORT || 3000;
const app = express();
const clientPath = path.join('build');

// Connecting to DB
// const dbConn = mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
// 	.then(() => console.log(`mongoDB connected`))
// 	.catch(err => console.log(err))

// Set static path for express
app.use(express.static(clientPath));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  


  console.log('POST sucsess!');
  res.send(200);
});

// app.post('/form_offer', function (req, res) {
//     	var email = req.body.email
//     	console.log('email')

//     // // dbConn.then(function(db) {
//     // //     // delete req.body._id; // for safety reasons
//     // //     // db.collection('offers').insertOne(req.body);
//     // });    
//     // res.send('Data received:\n' + JSON.stringify(req.body));
// });

app.listen(port, () => {
	console.log(`Server started on port ${port}`)})