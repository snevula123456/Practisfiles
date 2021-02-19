interface Department {
     name : string;
     salary ?:number

}

// const showing = (details : Person) => {
//      console.log(details)
// }

class Person implements Department {
     name : string;
     salary? : number;
     designation : string;
     constructor(n : string , designation : string,  salary? : number){
          this.name = n;
          this.salary = salary;
          this.designation = designation;
     }
}

export default Person;
