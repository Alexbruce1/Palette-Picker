const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(express.static('public'), bodyParser.json());

app.get('/api/v1/projects', (request, response) => {
  return response.status(200).json(projects);
});

app.post('/api/v1/projects', (request, response) => {
  // return response.status(200).json(projects);
});

app.get('/api/v1/palettes', (request, response) => {
  return response.status(200).json(palettes);
});

app.post('/api/v1/palettes', (request, response) => {
  console.log(request.body)
  return response.status(200).json('request was successful');
});
// 'api/v1/projects/:id/palettes'
// GET (return all palettes from the back end to the front end)
// POST (add a new palette to a project)
// DELETE (delete palette from project)

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

