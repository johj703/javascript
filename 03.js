// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " "
let str = "Hello World!";
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열 길이 확인하기
// console.log(str.length);

// 2-2. 문자열 결합하기(Concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
// console.log(str3.substr(7, 5));
// console.log(str3.slice(7, 12));

// 2-4. 문자열 검색
let str4 = "Hello, World1";
console.log(str4.search("World"));
