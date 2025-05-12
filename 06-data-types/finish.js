/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let myString = 'My message';

let myNumber = 23;

let myLogic = true;

let myNull = null;

let myUndefined = undefined;

const person = {
    firstName: "Ilona",
    lastName: 'Zakharova',
    greet: function() {
      console.log("Hello!");
    }
  };

 const myArray = [1, true, false, 'Hello', 10, undefined];
 
 console.log(typeof(myString));
 console.log(typeof(myNumber));
 console.log(typeof(myLogic));
 console.log(typeof(myNull));
 console.log(typeof(myUndefined));
 console.log(typeof(person));
 console.log(typeof(myArray));
