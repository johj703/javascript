// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key() : Key를 가져오는 메소드
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let keys = Object.keys(person);
// console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person);
// console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!(2차원 배열)
let entries = Object.entries(person);
// console.log("entries => ", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "여자" });
// console.log("newPerson => ", newPerson);

// 3-5. 객체 비교
// 객체, 배열은 크기가 크기 때문에 메모리에 저장할 때, 별도의 공간에 저장한다.
// 객체는 별도 공간에 저장할 때 값을 저장하는 것이 아니라, 주소 값을 저장하게 된다.
// 그렇기 때문에 같은 key와 value를 가진 객체라도 비교하면 false 값이 나오게 된다!
// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// let str1 = "aaa";
// let str2 = "aaa";

// console.log("answer => ", person1 === person2);
// console.log("answer2 => ", str1 === str2);

// console.log(JSON.stringify(person1) === JSON.stringify(person2));

// 3-6. 객체 병합
let person1 = {
  name: "홍길동",
  age: 30,
};

let person2 = {
  gender: "남자",
};

// ... : spread operator
let perfectMan = { ...person1, ...person2 };

console.log(perfectMan);
