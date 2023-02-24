//exercie 1

const formEl = document.getElementById("signup") as HTMLInputElement;
const firstNameEl = document.getElementById("firstName") as HTMLInputElement;
const ageEl = document.getElementById("age") as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLSelectElement;

const getGift = (age: number) => {
  return +age + 3;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (+ageEl.value < 18) {
    console.log("Inscription refused");
  } else {
    console.log(
      `Welcome ${firstNameEl.value}, you will get a gift in ${getGift(
        +ageEl.value
      )} years.`
    );
  }
});

//exercice 2
let pseudo: string = "test";
let total: number = 200;
// let isLoading: boolean = false;

let totalString: string = total.toString();
console.log("Total has type of:", typeof totalString);

console.log(pseudo.length);

let welComeMessage: string = `welcome ${pseudo} you got ${total} as a gift   `;
console.log(welComeMessage);

//exercice 3
let numbers: number[] = [1, 3, 2.5, 5];
numbers.push(20);
console.log(numbers);

//exercice 4
let x: [string, number, string];
x = ["Hello", 20, "test"];

console.log(x[2]);
console.log(typeof x[0]);

//tuple
const member: {
  access: [string, number];
} = {
  access: ["admin", 1],
};
member.access[0] = "notAdmin";
//on the tuple we are allowed to change the lengths of the arrays
member.access.push("info");
console.log(member.access);

//type object

let car: {
  color: string;
  date: number;
  option: string;
} = {
  color: "red",
  date: 2022,
  option: "GPS",
};
console.log(car.color);

//application
let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: number | string;
let colors: string[] = [];
colors.push("red");
console.log(colors);
let infos: (string | number | boolean)[] = [];
infos.push("dupont", true, 40);
console.log(infos);

let members: {
  firstName: string;
  age: number;
  isLoading: boolean;
} = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(members.age);

let memb = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(memb.age);

let informat: [string, number] = ["test", 20]; //Tuple
informat[1] = 200;
//we can push on Type types
informat.push("word");
console.log(informat);

//ENUM
enum col {
  red = 2,
  Green,
  Blue,
}

let colorName = col[2];
console.log(colorName);

//ANY

//Unknow

let inputData: unknown;
inputData = 20;

console.log(typeof inputData);

let inputAge: number;
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

const gift = (num: number) => {
  return num + 3;
};
//we need to specify the type of the return in functions
console.log(gift(10));

// let age : Function;
// age  = gift
// console.log("age 1" , age(20))

const buildname = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

let result1 = buildname("bob", "test");
console.log(result1);

//type Rest

let colorsss = (arg1: string, arg2: string, arg3: string) => {
  let arrayColor = ["red", "green", "blue"];
  for (let index = 0; index < arrayColor.length; index++) {
    console.log(arrayColor[index]);
  }
};

// colorsss()

const divElment = document.querySelector("divelement");

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
function gitfcallBack(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge);
}

gitfcallBack(40, (num) => console.log(num));

//union Type
function concatenate(arg1: number | string, arg2: number | string) {
  let result;

  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "number") {
    result = arg1 + arg2;
  }

  return result;
}

console.log(concatenate(10, 20));
console.log(concatenate("test", "test"));
console.log(concatenate("test", 2));

//////////////////////////////////////////////////Alias type
type NumStr = number | string;
type ObjIdUser = { id: number; username: string };
type ObjInvoice = { name: string; price: number };

const welcome = (username: string) => {
  console.log("welcome", username);
};

welcome("marwen");

const getProfileData = (user: ObjIdUser) => {
  console.log(`id:${user.id}, username : ${user.username}`);
};

getProfileData({ id: 236, username: "marwen" });

const invoice = (productDetails: ObjInvoice, userInfo: ObjIdUser) => {
  console.log(`
  productName: ${productDetails.name}
  price: ${productDetails.price}
  iDclient: ${userInfo.id}
  nameClient: ${userInfo.username}
  
  `);
};

const productDet = {
  name: "formation React",
  price: 100,
};

const userInf = { id: 122, username: "marwen" };

invoice(productDet, userInf);

//literal Types
function totall(arg1: number, arg2: number, totalversion: "getStringvalue") {
  let result;
  if (totalversion === "getStringvalue") {
    result = arg1.toString() + arg2.toString();
  } else {
    result = arg1 + arg2;
  }
  return result;
}

const totalResult = totall(20, 10, "getStringvalue");

console.log(totalResult);

// NEVER type

type AcceptedValues = string | number;

const formattt = (vall: AcceptedValues) => {
  if (typeof vall === "string") {
    return vall.length;
  } else if (typeof vall === "number") {
    return vall.toString();
  } else {
    const verifyCases: never = vall;
  }
};

console.log(formattt(200));

const throwError = (errMsg: never) => {
  throw new Error(errMsg);
};

// const result = throwError("test error message")
// console.log(result)

const getTotal = (arg: number) => {
  if (arg < 5) {
    //  console.log(throwError("test"))
  } else if (arg === 5) {
    console.log(arg);
  } else {
    return arg + 10;
  }
};

getTotal(4);

//Type Assertions

// As :
let someValue: unknown = "this is a string";
// let strLength = (someValue as string).length
// Angle bracket :
let strLength = (<string>someValue).length;
console.log(strLength);

// const firstname:NodeListOf<HTMLInputElement> = document.querySelectorAll("firstName")
// console.log(typeof firstname)
const firstname = document.getElementById("firstName") as HTMLInputElement;
console.log(typeof firstname.value);

const Namefirst = <HTMLInputElement>document.getElementById("firstName");
console.log(typeof Namefirst.value);

const nameFirstt = document.getElementById("firstName");
let inputValue = nameFirstt as HTMLInputElement;
let inputValue1 = (<HTMLInputElement>nameFirstt).value;

console.log(typeof inputValue1);

formEl.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(firstNameEl.value, ageEl.valueAsNumber, gender.value);
});

// Classes
class Invoice {
  client;
  product;
  price;

  constructor(client, product, price) {
    this.client = client;
    this.product = product;
    this.price = price;
  }
}

const invoice1 = new Invoice("test", "productname", 40);
const invoice2 = new Invoice("example name", "productname test", 45);
let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);

// héritage & polyphormisme

//class 1
class Person {
  //  private name: string;
  //  private hair: string;
  // private eyes: number;

  constructor(
    public name: string,
    private hair: string,
    protected eyes: number
  ) {
    // this.name = n;
    // this.hair = h;
    // this.eyes = eyes;
  }

  speak() {
    console.log(` i am ${this.name} and my hair is ${this.hair}`);
  }

  getHair() {
    return this.hair;
  }

  setHair(newhairColor: string) {
    this.hair = newhairColor;
  }
}

//class 2

class Person2 extends Person {
  speak() {
    console.log(
      ` i am ${this.name} and my hair is ${this.hair} english version`
    );
  }

  speakFirstLanguage() {
    super.speak();
  }
}

class Person3 extends Person {
  getData() {
    // only protected & public are accessible form the heritate classes
    //private not possible to access

    return this.eyes;
  }
}

// const child1 = new Person("Riahan", "red", 2)

// console.log(child1);
// child1.speak();

const child2: Person = new Person2("ria", "black", 2);
// console.log(child2);
child2.speak();

// private public getter setter
const child3: Person = new Person("nameChild", "black", 2);
// const Child3Edited = child3.getHair()
child3.setHair("white");
console.log(child3);

//read only ==> in case of read only we can access the properties read only , only by the constructor
class Car {
  // readonly color: string;
  // public speed: number = 2

  constructor(readonly color: string, public speed) {
    // this.color = color
  }
}

const carName = new Car("white", 5);
console.log(carName);





//interfaces

class Mother {
  name: string;
  eyes: number;

  constructor(name: string, eyes: number) {
    this.name = name;
    this.eyes = eyes;
  }

  speak() {
    console.log(` hello my name is ${this.name}`);
  }
}

const kid = new Mother("clientName", 2);

kid.speak()



// GENERICS : T is a placeholder allow as to specify the different types that we can use it 



const identity = <T>(arg: T) => {
   return arg

}

let output = identity<string>("Hello")
let output1 = identity<number>(200)
let output2 = identity({title: "hello world"})
console.log(output, output1, output2)


const ObjName = {name: "username"};
const ObjAge = {age: 20};

const ArrayFunction =<N extends{name:string}, A extends{age:number}>(name: N, age: A) => {
  let arr: Array<object> = [];
  arr.push(name, age);
  return arr

}

const result = ArrayFunction(ObjName, ObjAge);

console.log(result)


// GENERICS with Interfaces
interface User<T> {
  id: number,
  data: T
}

const userData: User<string[]> = {
  id:24,
  data: ["username", "admin"]
}

const userData2: User<object> = {
  id: 24,
  data: {name: "username2", title: "admin2"}
}

const userData3: User<{name:string, title:string}> = {
  id:12,
  data: {name:"username3", title:"admin3"}
}

 //GENERICS with CLASSES

 class DataClass<T extends string | number | object>{
    data: Array<T> = []

    saveData(value: T) {
      this.data.push(value)
    }

    getAlldata() {
      return [...this.data]
    }
 }

 const stringData = new DataClass();
 stringData.saveData("testData");
 stringData.saveData("testData1");
 stringData.saveData(10);
 stringData.saveData({title: "title", admin: "admin"});
 const resultData = stringData.getAlldata()
 console.log(resultData)

//Utility types partial
interface Todo {
  title: string
  description:string
} 

const FunctionTodo = (title:string, description:string) => {
  let todoList: Partial<Todo> = {}
  todoList.title = title
  // todoList.description = description

  return todoList


}

const resultTodo = FunctionTodo("title", "descr");
console.log(resultTodo)


console.log("test js")




// export {};
