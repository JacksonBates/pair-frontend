const express = require('express');
const bodyParser = require('body-parser');

const campers = require('./campers')
var convertToMS = require( './convertToMS' );

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/v1/posts', (req, res) => {
  let idList = campers.map(i => i._id);
  res.send(campers);
});

app.post('/api/v1/posts', (req, res) => {
  const { username, availableTime, setup, interests } = req.body;
  if ( !username || !availableTime ) return res.status( 400 ).send( { status: 400, error: "Missing parameters." });
  const endTime = convertToMS( availableTime );
  const offset = campers.length + 1;
  const newPost = {
    _id: '1234567890' + offset,
    postTime: new Date().getTime(),
    endTime: new Date().getTime() + endTime,
    username, setup, interests
  };
  campers.push(newPost);
  res.status(201).send({status: 201, data: newPost});
});

// Temp route until delete button is not fixed
app.post('/api/v1/:id', (req, res) => {
  var id = req.params.id;
  for (let i in campers) {
    if (campers[i]._id == id) {
      campers.splice(i, 1);
      return res.redirect('http://localhost:3000')
    }
  }
  res.redirect('http://localhost:3000')
});

// New route for delete button
// Tested with Postman
app.delete('/api/v1/posts/:id', (req, res) => {
  var id = req.params.id;
  for (let i in campers) {
    if (campers[i]._id == id) {
      campers.splice(i, 1);
      res.status(204).send();
    }
  }
  res.status(400).send();
});

app.listen(3001, () => {
  console.log('Server started on port 3001...');
})
