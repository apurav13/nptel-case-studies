// defining a string variable fruit and printing it
let fruit: string = "Pineapple";
console.log("My favorite fruit is " + fruit);

// this function prints double of a number
function doublevalue(num: number): void {
    console.log("original number is " + num)
    let value = num * 2;
    console.log("Double value is " + value);}

/* define the class Person 
  with a method sayHello 
  that prints a greeting message */
class Person {
    sayHello(): void {
        console.log("Hello! Hope you are doing well.");}}

// calling doublevalue function
doublevalue(13);

// creating an instance of Person class and calling sayHello method
let student = new Person();
student.sayHello();