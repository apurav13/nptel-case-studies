// defining a string variable fruit and printing it
var fruit = "Pineapple";
console.log("My favorite fruit is " + fruit);
// this function prints double of a number
function doublevalue(num) {
    console.log("original number is " + num);
    var value = num * 2;
    console.log("Double value is " + value);
}
/* define the class Person
  with a method sayHello
  that prints a greeting message */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello! Hope you are doing well.");
    };
    return Person;
}());
// calling doublevalue function
doublevalue(13);
// creating an instance of Person class and calling sayHello method
var student = new Person();
student.sayHello();
