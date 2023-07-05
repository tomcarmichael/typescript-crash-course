let id: number = 500;

let organisation: string = 'NASA'; // explicit type declaration

let isGov = true; // implicit type declaration, same effect as explicit, more terse
// isGov = 'false'; // reassignment to diff variable type causes error

let x: any = 'Hello';
x = 300;
x = undefined;

let ids: number[] = [1, 2, 3];

let heterogeneousArray: any[] = ['world', true, 666];

// Tuple
let myTuple: [number, boolean, string] = [5, false, 'static'];

// Tuple array
let tupleArray: [number, string][]
tupleArray = [[2001, 'A Space Odyssey'], [2015, 'Coco']]

// Union
let myUnion: string | number = 22
myUnion = '22';
myUnion = 222;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction1.Up); // 0
console.log(Direction2.Up); // 1
console.log(Direction2.Left); // 3

enum Direction3 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction3.Left); // 'Left'

// Types (objects)

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Types can also be used for primitive values, interfaces cannot

type Point = number | string

// Tpye Assertion
let cid: any = '1';
let customerId = <number>cid;

console.log(customerId + ' is a ' + (typeof customerId)) // '1 is a string' 
// This is because there is no runtime effect of type assertion in TypeScript.
// It is merely a way to let the TypeScript compiler know the type of a variable.

let y: any = '123';
let z = y as number;
console.log(z);

// Functions

function addNum(x: number, y: number): number { // specifies return value type
  return x + y
}

function log(message: string | number): void { // null or undefined are assignable to void
  console.log(message)
}

// Interfaces
// Interfaces cannot be used with unions

interface UserInterface {
  id: number,
  name: string,
  age?: number, /// use of '?' makes property optional
  readonly pinNumber: number // read-only, cannot be re assigned
}

const user1: UserInterface = {
  id: 1,
  name: 'Dave',
  pinNumber: 9999
}

// Interfaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (i: number, j: number): number => i + j;
console.log(add(1, 2))

const sub: MathFunc = (i: number, j: number): number => {
  return i - j;
}
console.log(sub(6, 2))

// Classes

interface PersonInterface {
  id: number,
  name: string,
  register(): string,
}

// error would be thrown if any properties from interface are absent from the class:
class Person implements PersonInterface { 
  id: number;
  name: string;
  private pin: number | undefined; // optional argument to constructor

  constructor(id: number, name: string, pin?: number) { 
    this.id = id;
    this.name = name;
    this.pin = pin;
  }

  register () {
    return `${this.name} is now registered`;
  }
}

const tom = new Person(1, 'Tom')
console.log(tom)

const bob = new Person(2, 'Bob', 2000)
// console.log(bob.pin) // throws an error since pin is private

// sub-classes
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name); // calls the constructor of parents class
    this.position = position;
  }
}

const emp = new Employee(5, 'Steve', 'VP of fun')
console.log(emp.register())

// Generics 
// Use of Type allows function to be called with args of any type, but then ensures that the return value...
// ...maintains that type throughout the rest of the program
function reverseArray<Type>(items: Type[]): Type[] {
  return items.reverse();
}

let reversedNumbers = reverseArray<number>([1, 2, 3, 4, 5]);
console.log(reversedNumbers)
// reversedNumbers.push('6') // trying to add a string to array throws an error
