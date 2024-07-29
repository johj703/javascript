// 단축 속성명 : property shorthand
const name = "nbc";
const age = "30";

// key - value가 같으면 생략할 수 있다!
const obj = { name, age };
const obj1 = { name: name, age: age };

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];
console.log(arr);
console.log(...arr);

let newArr = [...arr, 4];
console.log(arr);
console.log(newArr);
