/**
 * ЗАДАНИЕ 5: Переворот строки
 *
 * Напишите функцию reverseString(str), которая принимает строку
 * и возвращает её в обратном порядке символов.
 * Нельзя использовать .reverse() напрямую на строке.
 *
 * Пример:
 *   reverseString("hello")  => "olleh"
 *   reverseString("JavaScript") => "tpircSavaJ"
 *   reverseString("")        => ""
 */

function reverseString(str) {
  
  if (str != ""){return reverseString(str.slice(0, -1))}
  else {return ""}
}

module.exports = { reverseString };
