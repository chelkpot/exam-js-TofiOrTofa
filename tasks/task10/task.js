/**
 * ЗАДАНИЕ 10: Уникальные элементы
 *
 * Напишите функцию getUnique(arr), которая принимает массив
 * и возвращает новый массив только с уникальными элементами
 * (без повторений), сохраняя порядок первого появления.
 * Нельзя использовать Set.
 *
 * Пример:
 *   getUnique([1, 2, 2, 3, 1, 4]) => [1, 2, 3, 4]
 *   getUnique(["a", "b", "a"])    => ["a", "b"]
 *   getUnique([])                 => []
 */

function getUnique(arr) {
  
  const array = [arr[0]];
  arr.forEach(element => {
    let i = 0;
    array.forEach(secondElement => {
      if (element != secondElement)
      {
        i++
      }
    });
    if (i == array.length)
    {
      array.push(element)
    }
  });
  return array;
}

module.exports = { getUnique };
