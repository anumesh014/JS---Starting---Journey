// Learning Variables,constant and more..

const accountId = 144003
// const - constant (We can not change it because it's constant, You can change but it's on your Choice) It's good to lock value from const


let accountEmail = "example@gmail.com"
/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/
var accountPassword = "12345"

accountCity = "Kathmandu" // <- Try not to declare variable like this but we can declare it like this too..
let accountState;

// (accountId = 2) <--It's not allowed because it's declared as constant in code line (no.3)


accountEmail = "gorkha@gmail.com"
accountPassword= "19781232"
accountCity = "Bardiya"

console.table( [accountId, accountEmail, accountPassword, accountCity, accountState] );