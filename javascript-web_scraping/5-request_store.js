#!/usr/bin/node

const URL = process.argv[2];
const path = process.argv[3];
const request = require('request');
const fs = require('fs');

request(URL, (error, response, body) => {
  if (error) console.error(error);
  else {
    fs.writeFile(path, body, (err) => {
      if (err) console.error(err);
    });
  }
});
