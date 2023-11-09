const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(data => {
      let students = data.split('\n').map((elem) => elem.split(','));
      students = students.slice(1, students.length - 1);
      const fields = {};

      students.forEach((student) => {
        fields[student[student.length - 1]] = (fields[student[student.length - 1]] || 0) + 1;
      });

      console.log(`Number of students: ${students.length}`);

      const promises = Object.keys(fields).map((field) => {
        if (field) {
          const result = students
            .filter((std) => std[std.length - 1] === field)
            .map((el) => el[0]);

          return Promise.resolve(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
        }
      });

      return Promise.all(promises);
    })
    .then((results) => {
      results.forEach((result) => {
        console.log(result);
      });
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
