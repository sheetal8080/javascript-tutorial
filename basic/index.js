/*
// 1. ways to print in javascript
console.log("Hello world");
document.write("hey, i am printing this with document.write");
// alert("it has been shown through alert");

// 2. javascript console API
console.log("Hiie" , 9-5, "bye" );
console.warn("this is warning");
console.error("this is an error");

// 3.javascript variables
// there are three variables:- var, const and let
// variable:- containers to store data value

var number1 = 31;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in javascript
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects

// a. numbers
var num1 = 234;
var num2 = 28.83;
console.log(num1-num2);

// b. strings
var str1 = "this is the my first string for practice";
var str2 = "this is the my second for string practice";
console.log(str1, str2);

// c. objects
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
      console.log('Hello!');
    }
  };
  
  // Dot notation
  console.log(person.name); 
  
  // Bracket notation
  console.log(person['age']);

  console.log(person.greet);

  // Adding a new property
person.email = 'alice@example.com';

// Updating an existing property
person.age = 31;

console.log(person);

//deleting properties
delete person.greet;

console.log(person);

// d. booleans
let a = true;
let b = false;
console.log(a ,b);

//undefined
// in this if we doesn't mentioned the value of datatype then it will be shown as undefined.
var und= undefined;
var undef;
console.log(und);
console.log(undef);

//null
// in this we tell it to show null here and i want to show here the value of datatype as null.
var n = null;
console.log(n)

const arr =[9, 4, 1, "sheetal", 98]
console.log(arr[3]);


// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c /= 5;
c += 2;
c -= 2; // c = c - 2;
c *= 2;
console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators

// Logical and
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical not
console.log(!false);
console.log(!true);

// Function in JavaScript
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// Conditionals in JavaScript

var age = 41;
// Single if statement
if(age > 21){
  console.log('You can drink rasna water');
}
// if - else statement
if(age > 45){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

age = 25;
// if-else Ladder
if(age > 32){
  console.log("You are middle age man");
}
else if(age >26){
  console.log("you are mature man");
}
else if(age >22){
  console.log("you can bear responsibility now");
}
else if(age >18){
  console.log("you are ready to give direction to your life");
}
else{
  console.log("you are kid or teenager");
}
console.log("End of ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

//for loop
for(var i=0;i<arr.length;i++){
    if(i==2){
        break;
        continue;
    }
    console.log(arr[i]);
}

arr.forEach(function(element){
    console.log(element);
})


//CONST VARIABLE WHOSE VALUE CANNOT BE CHANGED LATER
const h = 0;
//h++; // IT WILL BE ERROR
//h = h +1; // IT WILL ALSO AN ERROR



// LET variable which is almost same as const 

var arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;

// while loop
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

//do while loop
do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);
*/
let myArr = ["Fan", "Camera", 34, null, true];

//Array Methods in javascript
console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
myArr.shift()
console.log(myArr);
const newLen = myArr.unshift("Harry")
// console.log(newLen);
console.log(myArr);

// // String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString)
