#!/usr/bin/node

const URL = process.argv[2];
const request = require('request');

request(URL, (error, response, body) => {
  if (error) console.error(error);
  else {
    const data = JSON.parse(body);
    let counter = 0;
    let todos = {};
    for (const user of data.userId) {
      if (data.completed === true) counter++;
        todos[user] = counter;
    }
    console.log(todos);
  }
});
