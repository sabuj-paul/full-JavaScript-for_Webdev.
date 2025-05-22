let score = "Sabuj"
console.log(typeof score)
console.log(score)

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//NaN

//"1233324" => 33
// "12fefe" => NaN
// true => 1 ; false => 0

let isLoggedIn ="Sabuj"

let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanLoggedIn));
console.log(booleanLoggedIn);

// 1 => true ; 0=> false
// "" => false
// "Sabuj" => true

let number = 99

let stringNumber = String( number)
console.log(`Number ${number} and ${stringNumber}`)
console.log(typeof stringNumber );

// ***********Operators********

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hi"
let str2 = " Sabuj"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2)
console.log(1 + "2")
console.log("1" + 2 + 2)//122
console.log(1 + 2 + "2")//32

console.log( (3 + 4) * 5 % 3);

//console.log(+true); // 1
//console.log(+""); // 0


let num1 , num2, num3

num1 = num2 = num3 = 2 + 2

console.log( num1 , num2, num3);

let eidPorobi = 100
++eidPorobi;
console.log(eidPorobi);


