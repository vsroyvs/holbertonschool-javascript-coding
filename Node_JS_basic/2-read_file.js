const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n');
    const students = {};

    for (const row of rows) {
      if (row.trim() === '') {
        continue;
      }
      const [firstName, , , field] = row.split(',');

      if (firstName) {
        if (students[field]) {
          students[field].push(firstName);
        } else {
          students[field] = [firstName];
        }
      }
    }

    const totalStudents = (students['CS\r'].length + students['SWE\r'].length);
    console.log(`Number of students: ${totalStudents}`);
    const studentsSWE = students['SWE\r'].join(', ');
    const studentsCS = students['CS\r'].join(', ');
    console.log(`Number of students in CS: ${students['CS\r'].length}. List: ${studentsCS}`);
    console.log(`Number of students in SWE: ${students['SWE\r'].length}. List: ${studentsSWE}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
