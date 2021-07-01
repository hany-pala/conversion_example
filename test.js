/**
 * 삼각형
 * 첫번째 인덱스 1개 출력 / 4칸 띄우기
 * 2번째 2개 출력 / 3칸 띄우기
 * 3번째 2개 출력 / 2칸 띄우기
 * 4번째 2개 출력 / 1칸 띄우기
 * 5번째 5개 출력 / 띄우기 없음
 * 
 * 이중 포문
 * 첫번째 포문 길이 : 5
 * 두번째 포문 
 */
let length = 5;
let addWhite = (index) => {
  let white = '';
  for (let i = 0; i < index; i++) {
    white.concat(' ');
  }
  return white;
};
 for (let i = 0; i < length; i++) {
  if (i === 0) {
    printItem = '*';
  } else if ( i === length - 1) {
    printItem = '*****';
  } else {
    let star = '*';
    let white = addWhite(i);
    printItem = star.concat(white).concat(star);
  }
  
  for (let j = i; j < 5; j++) {
    
    let whitespace = length - j + 1;
    let sum = addWhite(whitespace);
    console.log(whitespace, printItem, sum);
    // printItem = sum.concat(printItem);
    // console.log(printItem);
  }
 }