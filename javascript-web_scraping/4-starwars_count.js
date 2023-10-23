#!/usr/bin/node

const URL = process.argv[2];
const request = require('request');

request(URL, (error, response, body) => {
  if (error) console.error(error);
  else {
    const data = JSON.parse(body);
    const results = data.results;
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      const characters = results[i].characters;
      characters.forEach((peopleId) => {
        if (peopleId.endsWith('/18/')) count++;
      });
    }
    console.log(count);
  }
});
