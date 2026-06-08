/**
 * ЗАДАНИЕ 3: FizzBuzz
 *
 * Напишите функцию fizzBuzz(n), которая принимает число n и возвращает массив
 * строк от 1 до n по следующим правилам:
 *   - если число делится на 3 → "Fizz"
 *   - если число делится на 5 → "Buzz"
 *   - если делится на 3 и на 5 → "FizzBuzz"
 *   - иначе → само число в виде строки
 *
 * Пример:
 *   fizzBuzz(5) => ["1", "2", "Fizz", "4", "Buzz"]
 *   fizzBuzz(15) => [..., "FizzBuzz"]
 */

function fizzBuzz(n) {
  const numbers = [""];
  for (let i = 1; i < n+1; i++)
  {
    if (i % 3 == 0)
    {
      numbers[numbers.length - 1] = "Fizz"
    };
    if (i % 5 == 0)
    {
      numbers[numbers.length - 1] = numbers[numbers.length - 1] + "Buzz"
    };
    if (numbers[numbers.length -1] == "")
    {
      numbers[numbers.length - 1] = String(i)
    };
    numbers.push("");
  };
  return numbers;
}

module.exports = { fizzBuzz };
