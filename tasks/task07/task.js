/**
 * ЗАДАНИЕ 7: Сглаживание вложенного массива (один уровень)
 *
 * Напишите функцию flattenOnce(arr), которая принимает массив,
 * который может содержать вложенные массивы (только один уровень вложенности),
 * и возвращает "плоский" массив всех элементов.
 * Нельзя использовать .flat().
 *
 * Пример:
 *   flattenOnce([1, [2, 3], [4, 5], 6]) => [1, 2, 3, 4, 5, 6]
 *   flattenOnce([[1, 2], [3, 4]])        => [1, 2, 3, 4]
 *   flattenOnce([1, 2, 3])              => [1, 2, 3]
 */

function flattenOnce(arr) {
  const result = [];
  
  arr.forEach(element => {
    if (Array.isArray(element)) {
      // Если это массив, «раскрываем» его элементы в конец result
      result.push(...element);
    } else {
      // Если это обычный элемент, просто добавляем его
      result.push(element);
    }
  });
  
  return result;
}

module.exports = { flattenOnce };
