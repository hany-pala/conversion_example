/***
 * 다양한 타입의 데이터 여러 개를 인자로 받아 공통 타입으로 변환하는 함수
 * 
 * 전체 원소르 빠르게 순회할 수 있어야 함
 */

 /**
  * 빌드 어레이 함수를 정의한다.
  * 
  * input 값에 대해 형 검사를 한다.
  * 자바 스크립트 
  * data types
  * - string
  * - number
  * - boolean
  * - object
  * - function
  * 
  * objects types
  * - Object
  * - Date
  * - Array
  * 
  * things do not have value
  * - null
  * - undefined
  * 
  * NaN의 데이터 유형은 number
  * null의 데이터 유형은 object
  * 
  */
 

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 * @param {*} e 
 * @param {*} f 
 */

//typed array를 제외하고 new Array()로 초기하지 말아라
//오해의 소지 다분 
// new Array(3) null x3 new Array('3') ['3']
// [3] , ['3']
let typechecker = () => {
  
}

let build_array = (a, b, c, d, e, f) => {
  
  let list = [a,b,c,d,e,f];
  
  console.log(list);
}

let a = function(){console.log(1)};
build_array(1, 'a', 3.2, false, undefined, {x:'x'}, a);