// const formEl: HTMLFormElement = document.getElementById("signup") as HTMLFormElement;
// const FirstNameEl: HTMLInputElement = document.getElementById("firstName") as HTMLInputElement;
// const ageEl: HTMLInputElement = document.getElementById("age") as HTMLInputElement;



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

const formEl = document.getElementById("signup") as HTMLInputElement;
const firstNameEl = document.getElementById("firstName") as HTMLInputElement;
const ageEl = document.getElementById("age") as HTMLInputElement;

const getGift = (age: number) => {
   return +age + 3
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    if(+ageEl.value < 18) {
        console.log("Inscription refused");
    } else {
        console.log(`Welcome ${firstNameEl.value}, you will get a gift in ${getGift(+ageEl.value)} years.`);
    }
});


export {};