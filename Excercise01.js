

/**
 * Student 클래스를 생성한다. 해당 객체는 이름과, 평균이란 변수를 가진다.
 * 
 */
class Student {
  name = '';
  standard = 0;
  
  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }
  
  get() {
    return { name: this.name, standard: this.standard };
  }
}
class CollegeStudent {
  name = '';
  standardList = [];
  constructor(name, list) {
    this.name = name;
    this.standardList = list;
  }
  get() {
    return { name: this.name, standardList: this.standardList };
  }
}

class ClassRoom
{
  list = [];
  constructor(children) {
    this.list = children;
  }
  
  //this.list iterate 돌면서 대학생 것만 맵으로 가져온다.
  
  summary() {
    let mapping = new Map();
    let mapped = this.list
    .filter(item => item instanceof CollegeStudent)
    .map(item => mapping.set(item.name, item.standardList));
    return mapped;
  }
  
  addCollegeStudent(student) {
    let isCollege = student instanceof CollegeStudent ? true : false;
    console.log(isCollege)
    if (!isCollege) {
      return this.list;
    }
    this.list = [...this.list, student];
    return this.list;
  }
  addClassMate(mate) {
    let isMate = mate instanceof Student ? true : false;
    
    if (!isMate) {
      return this.list;
    }
    
    this.list = [...this.list, mate];
    
    return this.list;
  }
  size() {
    return this.list.length;
  }
  
  indexOf(index) {
    if(index > this.length) {
      return "Index out of range";
    }
    return this.list[index];
  }
}


let student = new Student("철수", 95);
let student2 = new Student("영희", 80);

let classRoom = new ClassRoom([student, student2]);

let student3 = new Student('주희', 95);
let teacher = { name: '상일', age: 31 };

classRoom.addClassMate(student3);

let college1 = new CollegeStudent('대학생1', [95,93,86]);
let college2 = new CollegeStudent('대학생2', [85,73,86,97,76]);
let college3 = new CollegeStudent('대학생3', [85,73,86,97,99]);
let college4 = new CollegeStudent('대학생4', [85,73,86,97,99]);
let college5 = new CollegeStudent('대학생5', [85,73,86,97,99]);
let college6 = new CollegeStudent('대학생6', [85,73,86,97,99]);
let college7 = new CollegeStudent('대학생7', [85,73,86,97,99]);

classRoom.addCollegeStudent(college1);
classRoom.addCollegeStudent(college2);
classRoom.addCollegeStudent(college3);
classRoom.addCollegeStudent(college4);
classRoom.addCollegeStudent(college5);
classRoom.addCollegeStudent(college6);
classRoom.addCollegeStudent(college7);

let br = classRoom.summary();
console.log('class mate br: ', br);
console.log('class size : ', classRoom.size());