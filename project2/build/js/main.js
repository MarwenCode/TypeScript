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
// console.log(greatGuitarist(evh))
const GuitPalyerFunction = (nameofplayer) => {
    var _a;
    if (nameofplayer.name) {
        return `Hello my name is: ${(_a = nameofplayer.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    else {
        return 'Hello';
    }
};
console.log(GuitPalyerFunction(evh));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
var Grade1;
(function (Grade1) {
    Grade1[Grade1["U"] = 1] = "U";
    Grade1[Grade1["D"] = 2] = "D";
    Grade1[Grade1["C"] = 3] = "C";
    Grade1[Grade1["B"] = 4] = "B";
    Grade1[Grade1["A"] = 5] = "A";
})(Grade1 || (Grade1 = {}));
console.log(Grade1.U);
