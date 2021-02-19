"use strict";
function multiply(value1, value2) {
    return value1 * value2;
}
var some;
var fun;
var mymultiply;
// mymultiply = "SayHello";
// console.log(mymultiply);
mymultiply = multiply;
// console.log(mymultiply(10,2));
console.log(mymultiply(100, 200));
function shyam(name, designation) {
    return "Name is " + name + " and Designation is " + designation;
}
var t;
t = "Testing 2";
t = shyam;
console.log(t('Shyam Singh', 'Developer'));
// Objects
var userDate = {
    Name: "Max",
    Age: 20,
    Designation: "Developer"
};
console.log(userDate);
// Complext Object
var Complex = {
    data: [100, 200, 300],
    output: function (all) {
        return this.data;
    }
};
// using types 
var testtypes = {
    data: [100, 200, 300],
    output: function (all) {
        return this.data;
    }
};
// Union Types : You can assign types more than one type
var myrealage;
myrealage = "Shyam";
// Comparision with typeof for condition --> to check the condition typeof should be in quotation mark
var singh = 20;
console.log(typeof (singh));
if (typeof singh == "string") {
    console.log("Type should be in quotation marks on ly then only it will work");
}
else {
    console.log("condition failing");
}
var bankAccount = {
    money: 2000,
    deposit: function (value2222) {
        this.money += value2222;
    }
};
var myself = {
    name: 'Max',
    Account: bankAccount,
    hobbies: ["sports", "cooking"]
};
myself.Account.deposit(3000);
console.log(myself);
