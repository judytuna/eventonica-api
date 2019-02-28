const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Eventonica API listening on port ${port}!`))

app.get('/', (req, res) => {
  res.json('hello world, this is my first route!');
});

// resource: events

app.get('/events', (req, res) => {
  res.json('GET /events -- get all events. implement me!');
});

app.get('/events/:id', (req, res) => {
  res.json('GET /events/:id -- get a single event by id. implement me!');
});

app.post('/events', (req, res) => {
  res.json('POST /events -- make a new event. implement me!');
});

app.put('/events/:id', (req, res) => {
  res.json('PUT /events/:id -- update an existing event. implement me!');
});

app.delete('/events/:id', (req, res) => {
  res.json('DELETE /events/:id -- delete an existing event. implement me!');
});