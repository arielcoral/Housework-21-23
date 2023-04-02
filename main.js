// משימה ראשונה

// let x = Number(prompt('Please enter a number'))
// if(x > 0){
//   console.log(x + ' is a positive number')
// }
// else if(x < 0){
//   console.log(x + ' is a negative number')
// }
// else{
//   console.log('The variable is equal ' + x)
// }

// משימה שניה

// let x = Number(prompt('Enter the first number'))
// let z = Number(prompt('Enter the second number'))

// if(x === z){
//   console.log('The two numbers you entered are equal')
// }
// else{
//   console.log('The two numbers you entered are not equal')
// }

// משימה שלישית

// let x = 'hello'

// if (x === ''){
//   console.log('blank')
// }
// else{
//   console.log('full')
// }

// משימה רביעית

// let x = Number(prompt('Enter temperature'))
// y = (x * 1.8) + 32
// console.log(y)

// משימה חמישית

// let x = Number(prompt('Enter the first number'))
// let y = Number(prompt('Enter the second number'))
// let z = Number(prompt('Enter the third number'))

// function maxNumber(x1,y1,z1){
//   return Math.max(x1,y1,z1)
// }
// numbers = maxNumber(x,y,z)
// console.log(numbers + ' This is the highest number of the three')

// משימה שישית

// let input = prompt("Enter a character:");

// if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
//   console.log(`${input} is a vowel.`);
// } else {
//   console.log(`${input} is not a vowel.`);
// }

// משימה שביעית

// let dayNumber = Number(prompt('Enter house number 1 to 7'))

// let daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ]

// if(dayNumber >= 1 && dayNumber <= 7){
//     let dayOfWeek = daysOfWeek[dayNumber - 1];
//     console.log(dayOfWeek)
// }
// else{
//     console.log('You did not enter a valid number')
// }

// משימה שמינית

// var year = prompt("Enter a year");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} It is a leap year`);
// } else {
//   console.log(`${year} It is not a leap year`);
// }

// שמימה תשיעית

// const num1 = parseInt(prompt("Enter the first number: "));

// const num2 = parseInt(prompt("Enter the second number: "));

// if (num1 % num2 === 0) {
//   console.log(`${num1} is divisible by ${num2}`);
// } else {
//   console.log(`${num1} is not divisible by ${num2}`);
// }



// function isPerfectSquare(num) {
//     if (num < 0) {
//       return false;
//     }
//     if (num === 0 || num === 1) {
//       return true;
//     }
//     let i = 1;
//     let square = 1;
//     while (square < num) {
//       i++;
//       square = i * i;
//     }
//     return square === num;
//   }
  
//   console.log(isPerfectSquare(25)); 
//   console.log(isPerfectSquare(17));