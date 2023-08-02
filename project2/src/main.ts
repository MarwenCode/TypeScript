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


//type
type Guitarist = {
    name: string;
    active: boolean;
    albums: (string | number) []
}


//interface
interface GuitarPlayer {
    name?: string,
    active:boolean,
    albums: (string | number)[]
}

let evh: GuitarPlayer = {
    name: "Edy",
    active: false,
    albums: [152, 'ki52', 12]
}

const greatGuitarist = (nameOfGuitarist: Guitarist) => {
    return `Hello ${nameOfGuitarist.name}`
}
// console.log(greatGuitarist(evh))



 

const GuitPalyerFunction = (nameofplayer: GuitarPlayer) => {

    if(nameofplayer.name) {
        return `Hello my name is: ${nameofplayer.name?.toUpperCase()}`

    }else {
        return 'Hello'
    }

  
}

console.log(GuitPalyerFunction(evh))

//Enums
enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);

enum Grade1 {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade1.U)


//Type Aliases
type stringOrNumber = string | number;

type stringOnNumberArray =(string | number)[];

type GuitarrPlayer = {
    name:string,
    active:boolean,
    albums:stringOnNumberArray
}

//Literal types
let myname: 'Dave';
let userName : "Dave" | 'Jon';
userName = "Jon";

//functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}


logMsg("hello");
logMsg(add(2,3));


type functionType = (a: number, b:number) => number;

// we can use interface too

// interface functionType {
//     (a: number, b: number): number
// }

const multiply : functionType = (c , d ) => {
    return c * d
}

logMsg(multiply(2,2))

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {

    if(typeof c !== 'undefined') {
        return a + b + c
        
    }else {
        return a + b
    }
 
}

//Rest Parameters 
const total = (a: number, ...nums:number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2))


//Type Assertions & Type Casting
type One = string
type Two = string | number
type Three = 'hello'
// convert to more or less specific 
let aa: One = 'hello'
let bb = a as Two // less specific 
let cc = aa as Three // more specific 

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//10 as string
(10 as unknown) as string

// The DOM 
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

// img.src
// myImg.src