const fs = require('fs');

function countStudents(path) {
  try {
    const allLines = fs.readFileSync(path, 'utf-8').trim().split('\r\n');
    const dataLines = allLines.slice(1)
    const headers = allLines[0].split(',');
    const result = [];
    dataLines.map((line) => {
      const obj = {}
      l = line.split(',');
      headers.map((h, i) => {
        obj[h] = l[i];
      });
      result.push(obj);
    })
    const nameCS = [];
    const nameSWE = [];
    result.forEach(line => {
      if (line['field'] === 'CS'){
        nameCS.push(line['firstname']);
      }
      if (line['field'] === 'SWE'){
        nameSWE.push(line['firstname']);
      }
    });
    console.log(`Number of students: ${result.length}`);
    console.log(`Number of students in CS: ${nameCS.length}. List: ${nameCS.join(', ')}`);
    console.log(`Number of students in SWE: ${nameSWE.length}. List: ${nameSWE.join(', ')}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
