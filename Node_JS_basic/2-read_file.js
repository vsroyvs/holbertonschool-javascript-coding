const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    let students = data.split('\n').map((elem) => elem.split(','));
    students = students.slice(1, students.length - 1);
    const fields = {};
    students.forEach((student) => {
      fields[student[student.length - 1]] = (fields[student[student.length - 1]] || 0) + 1;
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (field) {
        const result = students
          .filter((std) => std[std.length - 1] === field)
          .map((el) => el[0]);
        console.log(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
      }
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
