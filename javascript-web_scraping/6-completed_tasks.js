#!/usr/bin/node

const URL = process.argv[2];
const request = require('request');

request(URL, (error, response, body) => {
  if (error) console.error(error);
  const data = JSON.parse(body);
  const todos = {};
  data.forEach(task => {
    if (task.completed) {
      if (todos[task.userId])
        todos[task.userId]++;
      else todos[task.userId] = 1;
    }
  });
  console.log(todos);
});
