"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(username, fullname) {
        this.fullname = fullname;
        this.age = 27;
        this.username = username;
    }
    Person.prototype.Printage = function () {
        console.log(this.age);
        this.Settype("old Guy");
    };
    Person.prototype.Settype = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person("shyam", 'SHYAM');
console.log(person);
person.Printage();
// person.Settype("Shyam singh")
var shyam = /** @class */ (function (_super) {
    __extends(shyam, _super);
    function shyam(name) {
        return _super.call(this, "max", name) || this;
    }
    return shyam;
}(Person));
var shyam1 = new shyam("singh is king");
console.log(shyam1);
//Getters and Setters
var Plane = /** @class */ (function () {
    function Plane() {
        this._specises = "Default";
    }
    Object.defineProperty(Plane.prototype, "speciece", {
        get: function () {
            return this._specises;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "species", {
        set: function (value) {
            if (value.length > 3) {
                this._specises = value;
            }
            else {
                this._specises = "Default";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Plane;
}());
var singh = new Plane();
console.log(singh.speciece);
singh.species = "AB";
console.log(singh.speciece);
