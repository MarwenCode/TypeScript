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

//CLASSES

class Coder {

    secondLang!:string;

    constructor(
        public name: string,
        public music: string,
        private age:number,
        protected lang: string = "TypeScript"

        
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang
    }

    public getAge() {
        return `Hello i am ${this.age}`
    }

    
}

const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string, 
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'rock', 25);
console.log(Sara);
console.log(Sara.getLang())  



//Interfaces
interface Musician {
    name: string,
    instrument: string,


    play(action: string): string,
}

class Guitariste implements Musician {
    name: string
    instrument: string

    constructor(name:string, instrument:string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} ${this.instrument}`
    }
}


const profile = new Guitariste('Dave', 'Guitar')
console.log(profile.play("play well"));


// Static
class Users {
    static count: number = 0;

    static getCount(): number {
        return Users.count;

    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id =  ++Users.count
    }
}

const J = new Users('J');
const A = new Users('A');
const B = new Users('B');

console.log(Users.count);
console.log(J.id);

// Getters&& Setters
class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = ['test' ,"trest"];
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value
            return
        } else throw Error("Param is not an array of strings")
    }
}

const Mybands = new Bands();
console.log(Mybands.data)

Mybands.data = [...Mybands.data, "add Bands"];
console.log(Mybands.data);

//Index Signatures

interface TransactionsObj {
    [key: string] : number,


    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionsObj = {
    Pizza: 10,
    Books: -5,
    Job: 50

}

console.log(todaysTransactions.Pizza);

//console log the index or the key of the propety using the index signatures
console.log(todaysTransactions["Pizza"]);


let prop: string = 'Books';
console.log(todaysTransactions[prop]);

const todayIncome = (transactions: TransactionsObj): number => {
    let total = 0;
    for(const transaction in transactions) {

        total += transactions[transaction]

    }
    return total
}

console.log(todayIncome(todaysTransactions));




interface Student {
    // [key: string]: string | number | number[] | undefined,

    name: string,
    GPA: number, 
    classes: number[],
}

const student: Student = {
    name: "Doug",
    GPA:.897436, //this is a decimal   
    classes: [100,200]
}


for(const key in student) {
    console.log(`${key} :${student[key as keyof Student]}   `)
}


Object.keys(student).map(key => {
    console.log(student [key as keyof typeof student])
})


const logStudentkey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]} `)
}


logStudentkey(student, "GPA")
logStudentkey(student, "name")
logStudentkey(student, "classes")

//Record for index signatudes using type instead of interface

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus';

type Income = Record<Streams, number>;

const monthlyIncomes: Income = {
    salary: 500,
    bonus: 200
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Income])
}


// Generics Types
// GENERICS : T is a placeholder allow as to specify the different types that we can use it 



const identity = <T>(arg: T) => {
    return arg
 
 }
 
 let output = identity<string>("Hello")
 let output1 = identity<number>(200)
 let output2 = identity({title: "hello world"})
 console.log(output, output1, output2)

 type Person<T> = {
    name:string;
    DateofBirth:T
 }

 const person1: Person<number> = {
    name:"Alex",
    DateofBirth:3456789,
 }
 const person2: Person<string> = {
    name:"Alex",
    DateofBirth:"3456789",
 }

 console.log(person1)
 console.log(person2)


 
 
 const ObjName = {name: "username"};
 const ObjAge = {age: 20};
 
 const ArrayFunction =<N extends{name:string}, A extends{age:number}>(name: N, age: A) => {
   let arr: Array<object> = [];
   arr.push(name, age);
   return arr
 
 }
 
 const result = ArrayFunction(ObjName, ObjAge);
 
 console.log(result) 

