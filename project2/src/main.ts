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