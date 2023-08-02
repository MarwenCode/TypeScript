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
//Literal types
let myname;
let userName;
userName = "Jon";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(2, 3));
// we can use interface too
// interface functionType {
//     (a: number, b: number): number
// }
const multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//Rest Parameters 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
// convert to more or less specific 
let aa = 'hello';
let bb = a; // less specific 
let cc = aa; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string
10;
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
// img.src
// myImg.src
