class Department {
name : String;
private id : Number
protected Designation : string = "software Developer";


static organization : string = "TCS";
organization = "TCS"

constructor(n:String, id: Number){
     this.name = n;
     this.id = id;

}
printDepartDetails(){
     console.log(`The Department Details are ${this.name} and Id is ${this.id}`)
}

}

class ItDepartment extends Department {
     deptName : string;
     employees : number;
     empname : string;
     addEmployees : string[] = ["E1"];
     private sal : Number = 100;
     static e1 : string = "static"

     get salary() : Number{
          return this.sal
     }
     set salary(val : Number){
     this.sal = val;
     }
    
     constructor(deptName : string, employees : number, id: Number, name: String,empname : string){
          super(name,id)
          this.deptName = deptName;
          this.employees = employees;
          this.empname = empname;
     }
     addingEmployees(empname:string) {
          this.addEmployees.push(empname)
     }
     showDept(){
          console.log(`${this.Designation} and Organization is ${this.organization}`)

     }
}

export default ItDepartment;
