"use strict";
// const formEl: HTMLFormElement = document.getElementById("signup") as HTMLFormElement;
// const FirstNameEl: HTMLInputElement = document.getElementById("firstName") as HTMLInputElement;
// const ageEl: HTMLInputElement = document.getElementById("age") as HTMLInputElement;
exports.__esModule = true;
// const getGift = (age: number) => {
//    return +age + 3
// }
// formEl.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if(+ageEl.value <18 ) {
//         console.log("inscription refused")
//     }else {
//         console.log(`welcome ${FirstNameEl.value} you will get a git in ${getGift(ageEl.value)}` )
//     }
// })
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
