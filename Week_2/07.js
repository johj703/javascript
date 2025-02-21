function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
// 실행 과정
/* 
const multiplyByThree = multiplyBy(2) {
    return x + 2
}
*/

const multiplyByThree = multiplyBy(3);
// 실행 과정
/* 
const multiplyByThree = multiplyBy(3) {
    return x + 3
}
*/

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`)