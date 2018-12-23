const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./keys')

const port = process.env.PORT || 3000
const app = express()
const clientPath = path.join(__dirname,'..', 'build')

const dbConn = mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(() => console.log(`mongoDB connected`))
	.catch(err => console.log(err))

app.use(express.static(clientPath))
app.listen(port, () => {
	console.log(`Server started on port ${port}`)})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
// 	res.send('Hello')
// })

// app.post('/', function (req, res) {
//     	var email = req.body.email
//     	console.log('email')

//     // // dbConn.then(function(db) {
//     // //     // delete req.body._id; // for safety reasons
//     // //     // db.collection('offers').insertOne(req.body);
//     // });    
//     // res.send('Data received:\n' + JSON.stringify(req.body));
// });