function multiply(value1:number, value2:number){
     return value1 * value2;
}

let some: number;
let fun:(va:number,vallll:number)=> number;


let mymultiply : (val: number, val2 : number) => number ;
// mymultiply = "SayHello";
// console.log(mymultiply);
mymultiply = multiply;
// console.log(mymultiply(10,2));
console.log(mymultiply(100,200));

function shyam(name:string, designation:string){
 return `Name is ${name} and Designation is ${designation}`;
}

let t;
t = "Testing 2";
t = shyam;
console.log(t('Shyam Singh' , 'Developer'));

// Objects
let userDate:{Name:String, Age:number, Designation:String} = {
     Name: "Max",
     Age : 20,
     Designation: "Developer"
}
console.log(userDate);

// Complext Object
let Complex: {data:number[] , output:(all:boolean)=> number[]} = {
     data : [100,200,300],
     output: function(all:boolean):number[] {
          return this.data;
     }
}

// Creating Types in Typescript for complexity and reusability
type shyam = {data:number[], output: (all:boolean)=> number[]}

// using types 
let testtypes:shyam = {
     data:[100,200,300],
     output:function(all:boolean):number[]{
          return this.data;
     }
}


// Union Types : You can assign types more than one type

let myrealage:number | string;
myrealage = "Shyam";

// Comparision with typeof for condition --> to check the condition typeof should be in quotation mark


let singh = 20;
console.log(typeof(singh));
if(typeof singh == "string"){
     console.log("Type should be in quotation marks on ly then only it will work");
}
else{
     console.log("condition failing");
}

type bank = {money:number, deposit: (value2222:number)=> void }

let bankAccount = {
     money: 2000,
     deposit(value2222:number):void{
          this.money += value2222;
     }
}

let myself :{name:string , Account:bank, hobbies:string[]} = {
     name:'Max',
     Account:bankAccount,
     hobbies:["sports","cooking"]
};
myself.Account.deposit(3000);

console.log(myself);


