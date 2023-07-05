"use strict";
let id = 500;
let organisation = 'NASA'; // explicit type declaration
let isGov = true; // implicit type declaration, same effect as explicit, more terse
// isGov = 'false'; // reassignment to diff variable type causes error
let x = 'Hello';
x = 300;
x = undefined;
let ids = [1, 2, 3];
let heterogeneousArray = ['world', true, 666];
// Tuple
let myTuple = [5, false, 'static'];
// Tuple array
let tupleArray;
tupleArray = [[2001, 'A Space Odyssey'], [2015, 'Coco']];
// Union
let myUnion = 22;
myUnion = '22';
myUnion = 222;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up); // 0
console.log(Direction2.Up); // 1
console.log(Direction2.Left); // 3
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Left); // 'Left'
const user = {
    id: 1,
    name: 'John'
};
// Tpye Assertion
let cid = '1';
let customerId = cid;
console.log(customerId + ' is a ' + (typeof customerId)); // '1 is a string' 
// This is because there is no runtime effect of type assertion in TypeScript.
// It is merely a way to let the TypeScript compiler know the type of a variable.
let y = '123';
let z = y;
console.log(z);
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Dave',
    pinNumber: 9999
};
const add = (i, j) => i + j;
console.log(add(1, 2));
const sub = (i, j) => {
    return i - j;
};
console.log(sub(6, 2));
// error would be thrown if any properties from interface are absent from the class:
class Person {
    constructor(id, name, pin) {
        this.id = id;
        this.name = name;
        this.pin = pin;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const tom = new Person(1, 'Tom');
console.log(tom);
const bob = new Person(2, 'Bob', 2000);
// console.log(bob.pin) // throws an error since pin is private
// sub-classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // calls the constructor of parents class
        this.position = position;
    }
}
const emp = new Employee(5, 'Steve', 'VP of fun');
console.log(emp.register());
// Generics 
// Use of Type allows function to be called with args of any type, but then ensures that the return value...
// ...maintains that type throughout the rest of the program
function reverseArray(items) {
    return items.reverse();
}
let reversedNumbers = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedNumbers);
// reversedNumbers.push('6') // trying to add a string to array throws an error
