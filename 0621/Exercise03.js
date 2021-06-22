
class Citizen {
  name;
  age;
  
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

let kim = new Citizen('Kim', 22);
let lee = new Citizen('Lee', 25);
let park = new Citizen('Park', 18);
let jin = new Citizen('Jin', 16);

let citizens = [kim, lee, park, jin];

// let citizens_copy = citizens.entries(); // interate
let citizens_copy = [...citizens];         //array

console.log('전체 시민들: ');
citizens.forEach(citizen => console.log(`${JSON.stringify(citizen)} `));

console.log('투표권이 있는 시민들: ');
citizens.filter(adult => adult.age > 18)
          .forEach(citizen => console.log(`${JSON.stringify(citizen)} `));

console.log('내년에 투표권이 생기는 시민들: ');

citizens.filter(citizen => citizen.age === 18)
  .forEach(citizen => console.log(`${JSON.stringify(citizen)} `));
  
let numList = [ 2, 53, 1, 0, 4, 10 ];
console.log('flatted list: ', numList);

numList = numList.reverse();
console.log('reversed list: ', numList);

numList = numList.sort();

console.log('sorted list: ', numList);

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * a is less than b : -1
 * a is greater than b : 1
 * a must be equal to b : 0
 */

 
let sortOption = (a,b) => {
  let val = a < b ? -1 : a < b ? 1 : 0;
  return val;
}

numList = numList.sort(sortOption);

console.log('sorted list2: ', numList);