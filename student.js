var studentinfo= require('./Stu.js')
var input = require('readline-sync')

do {
  student = new studentinfo();
  console.log("======WELCOME TO USC====== ")
  console.log("    Students Information      ")
  student.setname(input.question("Student Name : "))
  student.setage(input.question("Student Age : "))
  student.setidnumber(input.question("Student idnumber : "))
  console.log("==== Add Student Course ===== ")
  student.addCourse(input.question("Course : "), input.question("Year : "))
  console.log("==== Add Student Schedule ====")
  student.addschedule(input.question("Day : "), input.question("Time : "))
  student.addStudent(student);
  console.log("STUDENT SUCCESSFULLY ADDED!")
} while (input.question("exit? : ") != "yes");
  student.displayinfo();

if (input.question("Do you want to remove  student: ") == "yes") {
  student.removedStudent(input.question("What student index you want to remove?: "), input.question("Number of students you want to remove: "));
};
  student.displayinfo();
  