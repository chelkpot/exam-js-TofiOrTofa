/**
 * ЗАДАНИЕ 4: Максимальный элемент
 *
 * Напишите функцию findMax(arr), которая принимает массив чисел
 * и возвращает наибольшее из них.
 * Нельзя использовать Math.max() — только цикл!
 *
 * Пример:
 *   findMax([3, 1, 7, 2, 5]) => 7
 *   findMax([-5, -1, -3])    => -1
 */

function findMax(arr) {
  
  let maxi = arr[0]
  arr.forEach(num => {
    if (num > maxi) {maxi = num}
  });
  return maxi;
}

module.exports = { findMax };
