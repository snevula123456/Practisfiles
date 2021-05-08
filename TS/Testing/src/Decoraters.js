// function Logger (constructor : Function) {
//      console.log("Logging...!")
//      console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Logger
// class Person {
//      constructor(){
//           console.log("Class Person construction is Executing")
//      }
// }
// Decoraters as Functions
function Logger(Logging) {
    return (function (constructor) {
        console.log(constructor);
        console.log(Logging);
    });
}
let Person = class Person {
    constructor() {
        console.log("Person class is working");
    }
};
Person = __decorate([
    Logger("Person - Logging")
], Person);
// Decoraters with showing Name
function withTemplate(template, hookId) {
    return function (constructor) {
        console.log('Logging');
        const hookEl = document.getElementById(hookId);
        console.log(hookEl);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Personname = class Personname {
    constructor() {
        this.name = "Shyam";
        console.log("PersonwithName class is working");
    }
};
Personname = __decorate([
    withTemplate('<h1>My Person Object</h1>', 'app')
], Personname);
export { withTemplate, Personname, Logger };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb3JhdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0RlY29yYXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsSUFBSTs7Ozs7OztBQUVKLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLGtFQUFrRTtBQUNsRSxTQUFTO0FBQ1QsSUFBSTtBQUdKLDBCQUEwQjtBQUUxQixTQUFTLE1BQU0sQ0FBQyxPQUFlO0lBQzFCLE9BQU8sQ0FBQyxVQUFTLFdBQXNCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QixDQUFDLENBQUMsQ0FBQTtBQUNQLENBQUM7QUFHRCxJQUFNLE1BQU0sR0FBWixNQUFNLE1BQU07SUFDUDtRQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0NBQ0wsQ0FBQTtBQUpLLE1BQU07SUFEWCxNQUFNLENBQUMsa0JBQWtCLENBQUM7R0FDckIsTUFBTSxDQUlYO0FBRUQsK0JBQStCO0FBRS9CLFNBQVMsWUFBWSxDQUFDLFFBQWdCLEVBQUUsTUFBYztJQUNqRCxPQUFPLFVBQVUsV0FBZ0I7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsTUFBTSxDQUFDLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFHLE1BQU0sRUFBRTtZQUNOLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDckQ7SUFDTixDQUFDLENBQUE7QUFDTixDQUFDO0FBR0QsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtJQUVkO1FBREcsU0FBSSxHQUFHLE9BQU8sQ0FBQztRQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0YsQ0FBQTtBQUxLLFVBQVU7SUFEZixZQUFZLENBQUMsMkJBQTJCLEVBQUcsS0FBSyxDQUFDO0dBQzVDLFVBQVUsQ0FLZjtBQUVELE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gTG9nZ2VyIChjb25zdHJ1Y3RvciA6IEZ1bmN0aW9uKSB7XG4vLyAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZy4uLiFcIilcbi8vICAgICAgY29uc29sZS5sb2coY29uc3RydWN0b3IpXG4vLyB9XG5cbi8vIEBMb2dnZXJcbi8vIGNsYXNzIFBlcnNvbiB7XG4vLyAgICAgIGNvbnN0cnVjdG9yKCl7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGFzcyBQZXJzb24gY29uc3RydWN0aW9uIGlzIEV4ZWN1dGluZ1wiKVxuLy8gICAgICB9XG4vLyB9XG5cblxuLy8gRGVjb3JhdGVycyBhcyBGdW5jdGlvbnNcblxuZnVuY3Rpb24gTG9nZ2VyKExvZ2dpbmc6IHN0cmluZykge1xuICAgICByZXR1cm4gKGZ1bmN0aW9uKGNvbnN0cnVjdG9yIDogRnVuY3Rpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RvcilcbiAgICAgICAgICBjb25zb2xlLmxvZyhMb2dnaW5nKVxuICAgICB9KVxufVxuXG5ATG9nZ2VyKFwiUGVyc29uIC0gTG9nZ2luZ1wiKVxuY2xhc3MgUGVyc29uIHtcbiAgICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcnNvbiBjbGFzcyBpcyB3b3JraW5nXCIpXG4gICAgIH1cbn1cblxuLy8gRGVjb3JhdGVycyB3aXRoIHNob3dpbmcgTmFtZVxuXG5mdW5jdGlvbiB3aXRoVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgaG9va0lkOiBzdHJpbmcpe1xuICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBhbnkpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dnaW5nJylcbiAgICAgICAgICBjb25zdCBob29rRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob29rSWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGhvb2tFbClcbiAgICAgICAgICBjb25zdCBwID0gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgaWYoaG9va0VsKSB7XG4gICAgICAgICAgICAgICBob29rRWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgICAgICAgICBob29rRWwucXVlcnlTZWxlY3RvcignaDEnKSEudGV4dENvbnRlbnQgPSBwLm5hbWU7XG4gICAgICAgICAgfVxuICAgICB9XG59XG5cbkB3aXRoVGVtcGxhdGUoJzxoMT5NeSBQZXJzb24gT2JqZWN0PC9oMT4nICwgJ2FwcCcpXG5jbGFzcyBQZXJzb25uYW1lIHtcbiAgICAgbmFtZSA9IFwiU2h5YW1cIjtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAgY29uc29sZS5sb2coXCJQZXJzb253aXRoTmFtZSBjbGFzcyBpcyB3b3JraW5nXCIpXG4gIH0gICBcbn1cblxuZXhwb3J0IHt3aXRoVGVtcGxhdGUsIFBlcnNvbm5hbWUsIExvZ2dlcn0iXX0=