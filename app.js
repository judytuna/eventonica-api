const express = require('express');
var bodyParser = require('body-parser');

const Pool = require('pg').Pool;
const pool = new Pool({
  // user: 'me',
  host: 'localhost',
  database: 'eventonica',
  // password: 'password',
  port: 5432,
});

const app = express();
const port = 3000;

const data = {
  events: []
};

app.use(bodyParser.json());

app.listen(port, () => console.log(`Eventonica API listening on port ${port}!`))

app.get('/', (req, res) => {
  res.json('hello world, this is my first route!');
});

// resource: events

app.get('/events', (req, res) => {
  res.json(data.events);
});

app.get('/events/:id', (req, res) => {
  console.log(req.params);
  res.json(data.events[req.params.id]);
});

app.post('/events', (req, res) => {
  let newEvent = req.body;
  data.events.push(newEvent);
  let message = 'Successfully created new event ' + JSON.stringify(newEvent) + ' with ID ' + (data.events.length - 1);
  res.json(message);
});

app.put('/events/:id', (req, res) => {
  res.json('PUT /events/:id -- update an existing event. implement me!');
});

app.delete('/events/:id', (req, res) => {
  res.json('DELETE /events/:id -- delete an existing event. implement me!');
});