const form = document.getElementById("signup");
const FirstName = document.getElementById("firstName");
const age = document.getElementById("age");


const getGift = (age) => {
   return + age + 3
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(age.value <18 ) {
        console.log("inscription refused")
    }else {
        console.log(`welcome ${FirstName.value} you will get a git in ${getGift(age.value)}` )
    }
})