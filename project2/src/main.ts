let username = "dave"; 
console.log(username)

let a: number = 12;
let b: string = '6';
let c: number = 2

console.log(a / b);
console.log(c * b)


//Types: 
let myName: string;
let age: number;
let isLoading: boolean;
let album: any;
let uniontype: string | number

myName = "Mar";
age = 40;
isLoading = true;
album = 1985;

const sum = (a:number, b:string) => {
    return a + b 
}

let postId: string | number;

//Arrays, Tuples & Enums

//Arrays
let stringArr = ["one","hey", "Dave"];


let guitars = ["Start", "Les Paul", 5150];

let mixedData = ['EVH', 1984, true]

stringArr.push("test"); 
guitars.unshift("jim")
console.log(guitars)

console.log(typeof stringArr)

let test = [];
let bands: string[] = [];
bands.push("My band")

//Tuple
 let myTuple: [string, number, boolean] = ["name", 42, true];

 let mixed = ["name", 1, false];

// objects
type Guitarist = {
    name: string;
    active: boolean;
    albums: (string | number) []
}

let evh: Guitarist = {
    name: "Edy",
    active: false,
    albums: [152, 'ki52', 12]
}

const greatGuitarist = (nameOfGuitarist: Guitarist) => {
    return `Hello ${nameOfGuitarist.name}`
}
console.log(greatGuitarist(evh))
 