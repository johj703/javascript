// while
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (조건식; 조건; 증감) {

// }

// whlie문을 활용해서, 3 초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
let i = 3;

while (i < 100) {
  if (i % 5 === 0 && i >= 5) {
    console.log(i + "는 5의 배수 입니다!");
  }

  i++;
}
