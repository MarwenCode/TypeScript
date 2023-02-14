//exercie 1
var formEl = document.getElementById("signup");
var firstNameEl = document.getElementById("firstName");
var ageEl = document.getElementById("age");
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
var pseudo = 'test';
var total = 200;
// let isLoading: boolean = false;
var totalString = total.toString();
console.log('Total has type of:', typeof totalString);
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
console.log(typeof (x[0]));
//tuple 
var member = {
    access: ["admin", 1]
};
member.access[0] = "notAdmin";
//on the tuple we are allowed to change the lengths of the arrays
member.access.push("info");
console.log(member.access);
//type object 
var car = {
    color: "red",
    date: 2022,
    option: "GPS"
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
    isLoading: true
};
console.log(members.age);
var memb = {
    firstName: "Dupont",
    age: 20,
    isLoading: true
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
// export {};
