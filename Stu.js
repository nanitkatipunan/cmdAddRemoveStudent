var listofstudents = [];
class student {
  constructor(name, age, idnumber) {
    this.name = name;
    this.age = age;
    this.idnumber = idnumber;
    this.course = {};
    this.schedule = {};
  }
  setname(name) {
    this.name = name;
  }
  setage(age) {
    this.age = age;
  }
  setidnumber(idnumber) {
    this.idnumber = idnumber;
  }
  addschedule(sday, stime) {
    this.schedule[sday] = stime;
  }
  addStudent(student) {
    listofstudents.push(student);
  }
  addCourse(ccourse, cyear) {
    this.course[ccourse] = cyear;
  }
  removedStudent(a, b) {
    listofstudents.splice(a, b);
    if (a >= listofstudents.length) {
      console.log(`${this.a} index,sorry this does not exist you cannot delete this!`)
    }
    else {
      console.log(`sucessfully deleted this index!`)
    }
  }
  displayinfo() {
    console.log(listofstudents);
  }
}

module.exports = student;