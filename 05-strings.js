
const name = "Sabuj ";
const futureRepoCount = 51;

console.log( name + futureRepoCount + " Value" );

const gameName = new String('Sabuj-vice-city')
console.log(gameName[0],gameName[14],gameName[15]);// index er bahirer sob undefined

//console.log(gameName.__proto__); //String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

// chrome dev tool

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))//##### see ###
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "   nill  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch";
 console.log(url)

console.log(url.replace('//','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));