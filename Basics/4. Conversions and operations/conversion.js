let score = "33abc" ;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc"=> NaN
// true => 1;
// false => 0;

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // True

// 1 - true; 0 - false;
// "empty"_"string" - false
// "garo" - true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(typeof stringNumber); // string
