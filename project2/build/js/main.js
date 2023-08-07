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
//CLASSES
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello i am ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'rock', 25);
console.log(Sara);
console.log(Sara.getLang());
class Guitariste {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const profile = new Guitariste('Dave', 'Guitar');
console.log(profile.play("play well"));
// Static
class Users {
    static getCount() {
        return Users.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Users.count;
    }
}
Users.count = 0;
const J = new Users('J');
const A = new Users('A');
const B = new Users('B');
console.log(Users.count);
console.log(J.id);
// Getters&& Setters
class Bands {
    constructor() {
        this.dataState = ['test', "trest"];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw Error("Param is not an array of strings");
    }
}
const Mybands = new Bands();
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "add Bands"];
console.log(Mybands.data);
const todaysTransactions = {
    Pizza: 10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
//console log the index or the key of the propety using the index signatures
console.log(todaysTransactions["Pizza"]);
let prop = 'Books';
console.log(todaysTransactions[prop]);
const todayIncome = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayIncome(todaysTransactions));
const student = {
    name: "Doug",
    GPA: .897436,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key} :${student[key]}   `);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentkey = (student, key) => {
    console.log(`Student ${key}: ${student[key]} `);
};
logStudentkey(student, "GPA");
logStudentkey(student, "name");
logStudentkey(student, "classes");
const monthlyIncomes = {
    salary: 500,
    bonus: 200
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// Generics Types
// GENERICS : T is a placeholder allow as to specify the different types that we can use it 
const identity = (arg) => {
    return arg;
};
let output = identity("Hello");
let output1 = identity(200);
let output2 = identity({ title: "hello world" });
console.log(output, output1, output2);
const person1 = {
    name: "Alex",
    DateofBirth: 3456789,
};
const person2 = {
    name: "Alex",
    DateofBirth: "3456789",
};
console.log(person1);
console.log(person2);
const ObjName = { name: "username" };
const ObjAge = { age: 20 };
const ArrayFunction = (name, age) => {
    let arr = [];
    arr.push(name, age);
    return arr;
};
const result = ArrayFunction(ObjName, ObjAge);
console.log(result);
