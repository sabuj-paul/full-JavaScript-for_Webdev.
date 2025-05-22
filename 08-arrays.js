

const myArr = [0,1,2,3,4,];
const myFamily = ["Sabuj","Nill"];
const myArray = new Array(1,2,3,45,"sabuj",true);

//console.log(myFamily);
//console.log(myArr);
//let a1 = myFamily[0]

//console.log(`My name is  ${a1} kumar paul and my brother name is  ${myFamily[1]} kumar paul `)

// Array methods

myArr.push(5)// add number in last index
myArr.push(6)
//console.log(myArr);

myArr.pop()// remove last index
//console.log(myArr);

//myArr.unshift(9)// add as zero  index or first index
//console.log(myArr);
//console.log(myArr[0])
//myArray.shift()// remove zero index
//console.log(myArray);

//console.log(myArr.includes(9))// find  9 in this array and give boolean value
//console.log(myArr.indexOf(3))// cammel case
//console.log(myArr.indexOf(13))// -1

//const newArry = myArr.join()// change datatype (string)

//console.log(newArry);
//console.log( typeof newArry);
//console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// print index 0 to 2

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// remove index 1 to 3
console.log("C ", myArr);
console.log(myn2);




