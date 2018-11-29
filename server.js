const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';

let projects = [
];

let palettes = [
  {
    name: "asdf",
    color1: "#2fcca",
    color2: "#a1c2c1",
    color3: "#5d39a3",
    color4: "#964f0b",
    color5: "#76072b"
  },
  {
    name: "asdfgh",
    color2: "#7f7453",
    color1: "#200340",
    color3: "#3b994c",
    color4: "#4ad984",
    color5: "#3083f2",
  },
];

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
  // return response.status(200).json('request was successful');
});
// 'api/v1/projects/:id/palettes'
// GET (return all palettes from the back end to the front end)
// POST (add a new palette to a project)
// DELETE (delete palette from project)

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

