// 1. Даний рядок тексту. Вивести його задом наперед

// const text = 'laptop';
// const reversedText = text.split('').reverse().join('');
// console.log(reversedText);

// 2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину

// function getNumber (num) {
//     return Math.round(num);
// }

// const number = getNumber(Math.random() * 20);
// console.log(number);



// 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)

// const user = prompt('Write your name small by small letters');
// alert(user.toUpperCase());



// 4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09” і повертає її у вигляді “22.09.2021”

// function getDate(enterDate) {

//   const parts = enterDate.split("-");

//   return (`${parts[1]}.${parts[2]}.${parts[0]}`);
// }

// const date = getDate("2021-22-09");
// console.log(date); 



// 5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру.
// isEqual(‘pApA’, ‘papa’)  //true
// isEqual(‘qwerty’, ‘QWErty’)  //true
// isEqual(‘aaa’, ‘EEE’) //false


// function isEqual(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }

// const str1 = 'pApA';
// const str2 = 'papa';
// console.log(isEqual(str1, str2)); 

// console.log(isEqual('qwerty', 'QWErty')); 
// console.log(isEqual('aaa', 'EEE')); 


// *6. Написати функцію, яка викидає помилку під час роботи і перевірити роботу функції, викликавши її у блоці try-catch

// function validateAge (age) {

//     if (typeof age !== 'number') {
//         throw new TypeError('age must be a number');
//     }

//     if (age < 0 || age > 110 || !Number.isSafeInteger(age)) {
//             throw new RangeError("n must be not minus and integer value");
//     }

//     return age;
// }

// try {
//     const validatedAge = validateAge(12);
//     console.log(validatedAge);
// } catch (error) {
    
//     if (error instanceof RangeError) {
//         console.log('RangeError handling')
//     } else if (error instanceof TypeError) {
//         console.log('TypeError handling')
//     }
// };

