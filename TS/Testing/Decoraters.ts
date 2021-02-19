// function Logger (constructor : Function) {
//      console.log("Logging...!")
//      console.log(constructor)
// }

// @Logger
// class Person {
//      constructor(){
//           console.log("Class Person construction is Executing")
//      }
// }


// Decoraters as Functions

function Logger(Logging: string) {
     return (function(constructor : Function) {
          console.log(constructor)
          console.log(Logging)
     })
}

@Logger("Person - Logging")
class Person {
     constructor(){
          console.log("Person class is working")
     }
}

// Decoraters with showing Name

function withTemplate(template: string, hookId: string){
     return function (constructor: any){
          console.log('Logging')
          const hookEl = document.getElementById(hookId);
          console.log(hookEl)
          const p = new constructor();
          if(hookEl) {
               hookEl.innerHTML = template;
               hookEl.querySelector('h1')!.textContent = p.name;
          }
     }
}

@withTemplate('<h1>My Person Object</h1>' , 'app')
class Personname {
     name = "Shyam";
  constructor(){
     console.log("PersonwithName class is working")
  }   
}

export {withTemplate, Personname, Logger}