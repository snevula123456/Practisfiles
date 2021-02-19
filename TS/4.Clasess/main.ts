class Person {
     username : string;
     private type : string;
     protected age : number = 27;

     constructor(username : string, public fullname: string ){
               this.username = username;
     }
     Printage(){
          console.log(this.age);
          this.Settype("old Guy")
     }
    private Settype (type : string){
          this.type = type;
     }
}

let person = new Person("shyam" , 'SHYAM')
console.log(person)
person.Printage();
// person.Settype("Shyam singh")

class shyam extends Person {
     constructor(name : string){
          super("max" , name)
     }
}

const shyam1 = new shyam("singh is king")
console.log(shyam1)

//Getters and Setters

class Plane {
     private _specises : string = "Default";

     get speciece(){
          return this._specises;
     }

     set species(value : string){
          if(value.length > 3){
               this._specises = value
          }else {
               this._specises = "Default"
          }
     }
}
const singh = new Plane();
console.log(singh.speciece);
singh.species = "AB";
console.log(singh.speciece);
