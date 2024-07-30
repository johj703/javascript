// 일급 객체로서의 함수

// (1) 변수에 함수를 할당 할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용 될 수 있도록 조치가 되었다.
// const sayHello = function () {
//     console.log('Hello');
// }

// sayHello();

// (2) 함수를 인자로 다른 함수에 전달 할 수가 있다.
function callFunction (func) {
    // 매개변수로 받은 변수가 사실, 함수다.
    func();
}

const sayHello = function () {
    console.log('Hello');
}