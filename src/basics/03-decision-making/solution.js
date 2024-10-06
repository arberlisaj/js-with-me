const allStudends = ["A", "B-", 1, 4, 5, 2];
const studentsWhoPass = [];

for (let i = 0; i < allStudends.length; i++) {
  let currentStudent = allStudends[i];
  if (currentStudent != "C" && currentStudent != 1) {
    studentsWhoPass.push(currentStudent);
  }
}

console.log(studentsWhoPass);
