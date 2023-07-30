"use strict";
let username = "dave";
console.log(username);
let a = 12;
let b = '6';
let c = 2;
console.log(a / b);
console.log(c * b);
//Types: 
let myName;
let age;
let isLoading;
let album;
let uniontype;
myName = "Mar";
age = 40;
isLoading = true;
album = 1985;
const sum = (a, b) => {
    return a + b;
};
let postId;
//Arrays, Tuples & Enums
//Arrays
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Start", "Les Paul", 5150];
let mixedData = ['EVH', 1984, true];
stringArr.push("test");
guitars.unshift("jim");
console.log(guitars);
console.log(typeof stringArr);
let test = [];
let bands = [];
bands.push("My band");
//Tuple
let myTuple = ["name", 42, true];
let mixed = ["name", 1, false];
let evh = {
    name: "Edy",
    active: false,
    albums: [152, 'ki52', 12]
};
const greatGuitarist = (nameOfGuitarist) => {
    return `Hello ${nameOfGuitarist.name}`;
};
console.log(greatGuitarist(evh));
