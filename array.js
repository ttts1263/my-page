// 함수와 배열
// 함수란? 매개변수를 입력받아 결과를 반환하는 것
// 배열이란?

// 두 숫자를 매개변수(parameters)로 받아서 곱셈 결과를 반환하는 함수
function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}

// 화살표함수
const someFunction = (num1, num2) => {
  return num1 * num2;
};

// 숫자 배열을 입력받아서 값을 1씩 증가시킨 배열을 반환
function increaseOne(array) {
  return array.map(function (item) {
    return item + 1;
  });
}

// 기존 배열을 변경하기 때문에 위험하다.
const array = [1, 2, 3];
// console.log(array);
array.push(4);
// console.log(array);

// 기존 배열을 변경하지 않기 때문에 안전하다.
const array2 = [1, 2, 3];
// console.log(array2);
const result = array2.concat(4);
// console.log(result);

function addItem(array, item) {
  return array.concat(item);
}

const array3 = [6, 78, 9, 3, 5, 6, 10, 3, 5, -1, 0, 0, -200];
const newArray = [...array3]; // [ 6, 78, 9, 3, ..., -200 ] 복제
newArray.sort((a, b) => a - b);
console.log(newArray);

newArray.reverse();

// forEach 배열을 순회하는 함수
array3.forEach((item) => {
  console.log(item);
});

// find 조건에 맞는 배열의 원소를 반환하는 함수
const value = array3.find((item) => item === 3);
console.log(value);

// filter 조건을 만족하는 원소 배열을 반환하는 함수
const filtered = array3.filter((item) => item > 10);
console.log(filtered);
