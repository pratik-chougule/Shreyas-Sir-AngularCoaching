function getName(name) {
    return "hi" + name;
}
var msg = getName("Pratik");
console.log(msg);
// in built datatypes in Typescript
//1]Number
var first = 12;
console.log(first);
//String 
var studName = "Pratik";
var studClass = "7th standard";
// ANy datatype
var val = 'Hi';
val = 555;
val = true;
function ProcessData(x, y) {
    return x * y;
}
var result;
result = ProcessData("Hello ", "Any!");
result = ProcessData(2, 3);
console.log(result);
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 25);
console.log('Sum of the numbers is: ' + sum);
//User defined datatypes
//Array, class, Touple, Enum, Interface,Function
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    myClass.prototype.sayMyName = function () {
        return "Pratik" + " " + this.name;
    };
    return myClass;
}());
var a = new myClass("Chougule");
var msg1 = a.sayMyName();
console.log(msg1);
var Student = /** @class */ (function () {
    function Student(RollNo, Name) {
        this.RollNo = 1;
        this.Name = "Pratik";
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
