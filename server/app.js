const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');
const Offer = require('./models/Offer');

const port = process.env.PORT || 3000
const app = express()
const clientPath = path.join('build')

// Connecting to DB
const dbConn = mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
	.then(() => console.log(`mongoDB connected`))
	.catch(err => console.log(err))

// Set static path for express
app.use(express.static(clientPath))

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Take Data from form
app.post('/send', async (req, res) => {
  
  let formData = {
  	name: req.body.name,
  	email: req.body.email,
  	offer: req.body.offer
  }
  
  // Create new entry
  let offer = new Offer(formData)
  await offer.save()
  
  // don't know why it's for
  //offerSchema.post('save', (err, doc, next) => { next(err) })

  // for safety delete id
  let offerObj = offer.toJSON()
  delete offerObj._id;

  // send OK response
  res.status(201).send()
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => { console.log(`Server started on port ${port}`) })