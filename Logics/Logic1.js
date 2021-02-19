// Max and Min Number from an Array and Insert the User values into it
// Logice - 1 Code
// ------------------------------------------------------------
// let values = [1,2,3,4,5,6,7,8,9];

// const MaxNumber = () => {
//      var maxNum = Math.max(...values);
//      console.log("MaxNumber " + maxNum);
// }

// const MinNumber = () => {
//     var minNum = Math.min(...values);
//     console.log("Min Number " + minNum);
// }

// document.getElementById("Entervalues").addEventListener('click', ()=>{
//      // console.log("Button is working");
//      const EnteredValue = document.getElementById('Inputvalues').value;
//      // console.log(EnteredValue);
//      values.push(EnteredValue);
//      MaxNumber()
//      MinNumber()
//      // e.preventdefault()
// })

// ---------------------------------------------------------------------
// Duplicates in Array

// var num = [1, 2, 2, 3, 3, 4, 5, 6];

// const Duplicates = num.filter((item, index) => {
//   return num.indexOf(item) === index;
// });
// console.log(Duplicates);

// indexOf() => will give the index of the given value if it is not present then it will give -1.

const constarray = new Array(1, 2, 3, "mango", "apple");
console.log(constarray);

const dataarray = ["switch", "wire", "board", "regulator"];
console.log(dataarray);

// console.log(dataarray.splice(0, 2));
// console.log(dataarray.toString());
// console.log(dataarray.slice(0, 1));

let today = new Date().toLocaleDateString();

let today1 = new Date().toLocaleDateString();
console.log(today1);
