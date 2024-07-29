//  스코프, 전역변수, 지역변수, 화살표함수
// 스코프 => 자바스크립트에서의 스코프는 변수의 영향범위라고 할 수 있다.
let x = 10;

function printX() {
  console.log(x);
}

console.log(x);
printX();
