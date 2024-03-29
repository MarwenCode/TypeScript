//exercie 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var formEl = document.getElementById("signup");
var firstNameEl = document.getElementById("firstName");
var ageEl = document.getElementById("age");
var gender = document.getElementById("gender");
var getGift = function (age) {
    return +age + 3;
};
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (+ageEl.value < 18) {
        console.log("Inscription refused");
    }
    else {
        console.log("Welcome ".concat(firstNameEl.value, ", you will get a gift in ").concat(getGift(+ageEl.value), " years."));
    }
});
//exercice 2
var pseudo = "test";
var total = 200;
// let isLoading: boolean = false;
var totalString = total.toString();
console.log("Total has type of:", typeof totalString);
console.log(pseudo.length);
var welComeMessage = "welcome ".concat(pseudo, " you got ").concat(total, " as a gift   ");
console.log(welComeMessage);
//exercice 3
var numbers = [1, 3, 2.5, 5];
numbers.push(20);
console.log(numbers);
//exercice 4
var x;
x = ["Hello", 20, "test"];
console.log(x[2]);
console.log(typeof x[0]);
//tuple
var member = {
    access: ["admin", 1],
};
member.access[0] = "notAdmin";
//on the tuple we are allowed to change the lengths of the arrays
member.access.push("info");
console.log(member.access);
//type object
var car = {
    color: "red",
    date: 2022,
    option: "GPS",
};
console.log(car.color);
//application
var names;
var speed = 25;
var isLoading;
var age;
var colors = [];
colors.push("red");
console.log(colors);
var infos = [];
infos.push("dupont", true, 40);
console.log(infos);
var members = {
    firstName: "Dupont",
    age: 20,
    isLoading: true,
};
console.log(members.age);
var memb = {
    firstName: "Dupont",
    age: 20,
    isLoading: true,
};
console.log(memb.age);
var informat = ["test", 20]; //Tuple
informat[1] = 200;
//we can push on Type types
informat.push("word");
console.log(informat);
//ENUM
var col;
(function (col) {
    col[col["red"] = 2] = "red";
    col[col["Green"] = 3] = "Green";
    col[col["Blue"] = 4] = "Blue";
})(col || (col = {}));
var colorName = col[2];
console.log(colorName);
//ANY
//Unknow
var inputData;
inputData = 20;
console.log(typeof inputData);
var inputAge;
if (typeof inputData === "number") {
    inputAge = inputData;
}
//need to add an if statement to accepte the change of type from unknow to a number, because we can not asign the number
//type directly
console.log(typeof inputAge);
//Functions
// function gift(num: number) {
//     return num + 3
// }
var gift = function (num) {
    return num + 3;
};
//we need to specify the type of the return in functions
console.log(gift(10));
// let age : Function;
// age  = gift
// console.log("age 1" , age(20))
var buildname = function (firstName, lastName) {
    return firstName + " " + lastName;
};
var result1 = buildname("bob", "test");
console.log(result1);
//type Rest
var colorsss = function (arg1, arg2, arg3) {
    var arrayColor = ["red", "green", "blue"];
    for (var index = 0; index < arrayColor.length; index++) {
        console.log(arrayColor[index]);
    }
};
// colorsss()
var divElment = document.querySelector("divelement");
// let col = (arg1: string, arg2: string, arg3: string) => {
//     let arrayList = ["test1", "test2", "test3"]
//     const h1 = document.createElement("h1");
//     h1.innerHTML = `title: ${arg1}`
//     divElment?.appendChild(h1);
//     const ListElment = document.querySelector("list")
//     for (let index = 0; index < arrayList.length; index++) {
//        console.log(arrayList[index])
//        let liElement = document.createElement("li");
//        liElement.innerHTML = arrayList[index]
//        ListElment.appendChild(liElement)
//     }
//     divElment?.appendChild(ListElment)
// }
// Call Back Function
function gitfcallBack(age, sum) {
    var memberAge = age + 3;
    sum(memberAge);
}
gitfcallBack(40, function (num) { return console.log(num); });
//union Type
function concatenate(arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    return result;
}
console.log(concatenate(10, 20));
console.log(concatenate("test", "test"));
console.log(concatenate("test", 2));
var welcome = function (username) {
    console.log("welcome", username);
};
welcome("marwen");
var getProfileData = function (user) {
    console.log("id:".concat(user.id, ", username : ").concat(user.username));
};
getProfileData({ id: 236, username: "marwen" });
var invoice = function (productDetails, userInfo) {
    console.log("\n  productName: ".concat(productDetails.name, "\n  price: ").concat(productDetails.price, "\n  iDclient: ").concat(userInfo.id, "\n  nameClient: ").concat(userInfo.username, "\n  \n  "));
};
var productDet = {
    name: "formation React",
    price: 100,
};
var userInf = { id: 122, username: "marwen" };
invoice(productDet, userInf);
//literal Types
function totall(arg1, arg2, totalversion) {
    var result;
    if (totalversion === "getStringvalue") {
        result = arg1.toString() + arg2.toString();
    }
    else {
        result = arg1 + arg2;
    }
    return result;
}
var totalResult = totall(20, 10, "getStringvalue");
console.log(totalResult);
var formattt = function (vall) {
    if (typeof vall === "string") {
        return vall.length;
    }
    else if (typeof vall === "number") {
        return vall.toString();
    }
    else {
        var verifyCases = vall;
    }
};
console.log(formattt(200));
var throwError = function (errMsg) {
    throw new Error(errMsg);
};
// const result = throwError("test error message")
// console.log(result)
var getTotal = function (arg) {
    if (arg < 5) {
        //  console.log(throwError("test"))
    }
    else if (arg === 5) {
        console.log(arg);
    }
    else {
        return arg + 10;
    }
};
getTotal(4);
//Type Assertions
// As :
var someValue = "this is a string";
// let strLength = (someValue as string).length
// Angle bracket :
var strLength = someValue.length;
console.log(strLength);
// const firstname:NodeListOf<HTMLInputElement> = document.querySelectorAll("firstName")
// console.log(typeof firstname)
var firstname = document.getElementById("firstName");
console.log(typeof firstname.value);
var Namefirst = document.getElementById("firstName");
console.log(typeof Namefirst.value);
var nameFirstt = document.getElementById("firstName");
var inputValue = nameFirstt;
var inputValue1 = nameFirstt.value;
console.log(typeof inputValue1);
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(firstNameEl.value, ageEl.valueAsNumber, gender.value);
});
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice("test", "productname", 40);
var invoice2 = new Invoice("example name", "productname test", 45);
var invoiceArray = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);
// héritage & polyphormisme
//class 1
var Person = /** @class */ (function () {
    //  private name: string;
    //  private hair: string;
    // private eyes: number;
    function Person(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
        // this.name = n;
        // this.hair = h;
        // this.eyes = eyes;
    }
    Person.prototype.speak = function () {
        console.log(" i am ".concat(this.name, " and my hair is ").concat(this.hair));
    };
    Person.prototype.getHair = function () {
        return this.hair;
    };
    Person.prototype.setHair = function (newhairColor) {
        this.hair = newhairColor;
    };
    return Person;
}());
//class 2
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person2.prototype.speak = function () {
        console.log(" i am ".concat(this.name, " and my hair is ").concat(this.hair, " english version"));
    };
    Person2.prototype.speakFirstLanguage = function () {
        _super.prototype.speak.call(this);
    };
    return Person2;
}(Person));
var Person3 = /** @class */ (function (_super) {
    __extends(Person3, _super);
    function Person3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person3.prototype.getData = function () {
        // only protected & public are accessible form the heritate classes
        //private not possible to access
        return this.eyes;
    };
    return Person3;
}(Person));
// const child1 = new Person("Riahan", "red", 2)
// console.log(child1);
// child1.speak();
var child2 = new Person2("ria", "black", 2);
// console.log(child2);
child2.speak();
// private public getter setter
var child3 = new Person("nameChild", "black", 2);
// const Child3Edited = child3.getHair()
child3.setHair("white");
console.log(child3);
//read only ==> in case of read only we can access the properties read only , only by the constructor
var Car = /** @class */ (function () {
    // readonly color: string;
    // public speed: number = 2
    function Car(color, speed) {
        this.color = color;
        this.speed = speed;
        // this.color = color
    }
    return Car;
}());
var carName = new Car("white", 5);
console.log(carName);
//interfaces
var Mother = /** @class */ (function () {
    function Mother(name, eyes) {
        this.name = name;
        this.eyes = eyes;
    }
    Mother.prototype.speak = function () {
        console.log(" hello my name is ".concat(this.name));
    };
    return Mother;
}());
var kid = new Mother("clientName", 2);
kid.speak();
// GENERICS : T is a placeholder allow as to specify the different types that we can use it 
var identity = function (arg) {
    return arg;
};
var output = identity("Hello");
var output1 = identity(200);
var output2 = identity({ title: "hello world" });
console.log(output, output1, output2);
var ObjName = { name: "username" };
var ObjAge = { age: 20 };
var ArrayFunction = function (name, age) {
    var arr = [];
    arr.push(name, age);
    return arr;
};
var result = ArrayFunction(ObjName, ObjAge);
console.log(result);
var userData = {
    id: 24,
    data: ["username", "admin"]
};
var userData2 = {
    id: 24,
    data: { name: "username2", title: "admin2" }
};
var userData3 = {
    id: 12,
    data: { name: "username3", title: "admin3" }
};
//GENERICS with CLASSES
var DataClass = /** @class */ (function () {
    function DataClass() {
        this.data = [];
    }
    DataClass.prototype.saveData = function (value) {
        this.data.push(value);
    };
    DataClass.prototype.getAlldata = function () {
        return __spreadArray([], this.data, true);
    };
    return DataClass;
}());
var stringData = new DataClass();
stringData.saveData("testData");
stringData.saveData("testData1");
stringData.saveData(10);
stringData.saveData({ title: "title", admin: "admin" });
var resultData = stringData.getAlldata();
console.log(resultData);
var FunctionTodo = function (title, description) {
    var todoList = {};
    todoList.title = title;
    // todoList.description = description
    return todoList;
};
var resultTodo = FunctionTodo("title", "descr");
console.log(resultTodo);
console.log("test js");
// import export modules 
import { PersonInter } from "./PersonInterface.js";
var person = new PersonInter("testname", 20);
console.log(person);
// export {};
//# sourceMappingURL=typeScript.js.map