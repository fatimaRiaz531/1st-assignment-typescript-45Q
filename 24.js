// 24. more conditional test 
let cars = 'subaru';
let age = 25;
let numbers = [1, 2, 3, 4];
//**  string tests**
//test 1 : equality (true)
console.log(" Is car =='subaru'? I predict True.");
console.log(cars == 'subaru'); //True ( case-insensitive)
//test 2 : strict equality (False)
console.log(" Is car !==='subaru'? I predict False.");
console.log(cars === 'subaru'); // False ( case-sensitive)
//test 3 : Inequality (True)
console.log(" Is car !='Toyota'? I predict True.");
console.log(cars != 'Toyota'); //true
//test 4 : inequality (false)
console.log(" Is car !=='subaru'? I predict false.");
console.log(cars !== 'subaru'); // False (case-sensitive)
//test 5 : lowercase conversion(True)
console.log(" Is car.tolowerCase() =='subaru'? I predict True.");
console.log(cars.toLocaleLowerCase() == 'subaru'); //true (converted to lowercase)
//test 6: lowercase conversion (false)
console.log("Is car === car.tolowerCase()? I predict False.");
console.log(cars === cars.toLocaleLowerCase()); // false (original value remains)
//** numerical test**
//test 7: equality (true)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //true
//test 8: inequality (false)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // true
//test 9: greater then (false)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // false
//test 10: less then or equal (true)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // true
//*logical operators**
//test 11: AND (true)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // true (both conditions met)
//test 12:OR(false)
console.log("Is age > 30 ||  age < 18? I predict false.");
console.log(age > 30 || age < 18);
// */array tests**
//test 13: In array (Test)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers); // true (checks for index existance)
//test 14: not in array (false)
console.log("Is 5 not in numbers? I predict False.");
console.log(5 in numbers); // true (negation of "in" operator)
export {};
