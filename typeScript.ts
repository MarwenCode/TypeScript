

//exercie 1

const formEl = document.getElementById("signup") as HTMLInputElement;
const firstNameEl = document.getElementById("firstName") as HTMLInputElement;
const ageEl = document.getElementById("age") as HTMLInputElement;

const getGift = (age: number) => {
    return +age + 3
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    if (+ageEl.value < 18) {
        console.log("Inscription refused");
    } else {
        console.log(`Welcome ${firstNameEl.value}, you will get a gift in ${getGift(+ageEl.value)} years.`);
    }
});


//exercice 2 
let pseudo: string = 'test';
let total: number = 200;
// let isLoading: boolean = false;

let totalString: string = total.toString()
console.log('Total has type of:', typeof totalString);


console.log(pseudo.length)


let welComeMessage: string = `welcome ${pseudo} you got ${total} as a gift   `
console.log(welComeMessage)

//exercice 3
let numbers: number[] = [1, 3, 2.5, 5]
numbers.push(20)
console.log(numbers)

//exercice 4
let x: [string, number, string];
x = ["Hello", 20, "test"]


console.log(x[2])
console.log(typeof (x[0]))

//tuple 
const member: {
    access: [string, number]
} = {
    access: ["admin", 1]
}
member.access[0] = "notAdmin";
//on the tuple we are allowed to change the lengths of the arrays
member.access.push("info")
console.log(member.access)


//type object 

let car: {
    color:string;
    date:number;
    option:string;
} = {
    color : "red",
    date:2022,
    option: "GPS"
}
console.log(car.color)



//application
let names:string;
let speed:number =  25;
let isLoading: boolean;
let age:number | string;
let colors:string[] = [];
colors.push("red")
console.log(colors)
let infos:(string | number | boolean)[] = []
infos.push("dupont", true, 40)
console.log(infos)


let members: {
    firstName: string;
    age:number;
    isLoading:boolean;
}  = {
    firstName:"Dupont",
    age:20,
    isLoading:true
}
console.log(members.age)

let memb  = {
    firstName:"Dupont",
    age:20,
    isLoading:true
}
console.log(memb.age)

let informat: [string, number]= ["test", 20]; //Tuple
informat[1] = 200
//we can push on Type types 
informat.push("word")
console.log(informat)


//ENUM 
enum col {
    red= 2,
    Green,
    Blue
}

let colorName = col[2]
console.log(colorName)



//ANY

//Unknow

let inputData: unknown;
inputData =20 

console.log(typeof inputData);

let inputAge: number
if(typeof inputData === "number") {
    inputAge = inputData
}
//need to add an if statement to accepte the change of type from unknow to a number, because we can not asign the number
//type directly 

console.log(typeof inputAge)













 






























// export {};


