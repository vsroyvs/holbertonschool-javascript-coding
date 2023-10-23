#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const URL = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(URL, (error, response, body) => {
  if (error) console.error(error);
  else console.log(JSON.parse(body).title);
});
