"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function cubeNumber(num) {
  return num ** 3;
}

const number = 5;
const result = cubeNumber(number);

console.log(`Number ${number} cubed is: ${result}`);