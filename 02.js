// 데이터 타입
// runtime : run 하는 time
// 코드를 작성 할 때가 아니라, 실제 코드가 실행 될 때
// -> 옆에 있는 터미널에 코드가 실행 될 때,
// 그 때, 데이터 타입이 결정된다.
// Java : String a = "abc";
// const a = "abc";

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 1-3. 지수형(Exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3);
console.log(typeof num3);

// 1-4. 숫자가 아닌 값을 변환하려고 할 때 나타나는 현상
// Nan : Not a Number
let num4 = "Hello" / 2;
console.log(num4);
