const score = 700;
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
//console.log(typeof balance);//object
console.log(balance.toFixed(2));// dosomik number

const otherNumber =123.8966

console.log(otherNumber.toPrecision(4));// 1st 4 number

const hundreds = 10000000

console.log(hundreds.toLocaleString("en-in"));

//-----************ Maths ***************-----

console.log(Math);//Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

// object

console.log(Math.abs(-4));//  same to  ||
console.log(Math.round(4.6));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.2));
console.log(Math.min(4,3,8,2,6));
console.log(Math.max(4,3,8,2,6));

console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);





