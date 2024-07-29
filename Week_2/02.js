// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나 객체의 속성

// (1) 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log("1", value1);
// console.log("2", value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
