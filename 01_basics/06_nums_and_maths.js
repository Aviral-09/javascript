const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//number:100

console.log(balance.toString().length);//3
console.log(balance.toFixed(2));

const othernumber = 23.4567

console.log(othernumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//*******************************MATHS*****************

console.log(Math);
console.log(math.abs(-4));
console.log(math.round(4.5));
console.log(math.ceil(4.3));
console.log(math.floor(4.3));

console.log(math.random());//values between 0 to 1
console.log((math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.random() * (max-min +1)+min);

