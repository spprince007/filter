const numbers=[32, 40, 19, 22, 12, 15, 09, 50];
//const number=numbers.filter(number=> number > 20);
const smallNum=numbers.filter(number=> number<20);
const verySmall=numbers.filter(n=> n<10);
const evenNumber=numbers.filter(n=> n%2===0);
const oddNumber=numbers.filter(n=> n%2 != 0);
console.log(smallNum);
console.log(verySmall);
console.log(evenNumber);
console.log(oddNumber);