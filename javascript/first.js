
// arithmetic operator
{ 
let a = 3;
 let b = 2;

 console.log(" a =",a, "b =",b);
 console.log(" a + b = " , a + b);
 console.log(" a - b = " , a - b);
 console.log(" a * b = " , a * b);
 console.log(" a / b = " , a / b);
 console.log(" a % b = " , a % b); // it is modulus... it means ki jab a, b se divide hogaa to jo remainder bachegaa uska value hi final answer rahegaa.
 console.log(" a ** b = " , a ** b); // it is exponentiation..... it shows that first value has a power of second value.
}
 
 //unary operator
{ 
let a = 3;
 let b = 2;

 console.log(" a =",a, "b =",b);
 a++; 
 console.log(" a++ =",a);
 a--;
 console.log(" a-- =",a);

 console.log(" ++a =",++a); // first add then print
 console.log(" --a =",--a); // first minus then print
}


//Assignment Operators
{
let a = 3;

 a += 3;
 console.log(" a =",a)
 a -= 1;
 console.log(" a =",a)
 a *= 3;
 console.log(" a =",a)
 a /= 3;
 console.log(" a =",a)
 a %= 3;
 console.log(" a =",a)
 a **= 3;
 console.log(" a =",a)
}
//Comparison Operators
{
let a = 3;
 let b = "3";

console.log("a==b is", a==b);
console.log("a!=b is", a!=b);

console.log("a===b is", a===b); //it is stricter version of "==", which means it also compare the datatype of value..... for e.g... a is number and b is string that's why it will show as a false. because datatype is different.... but in upper "==" case it convert a string into number and then compare the values.
console.log("a!==b is", a!==b);

console.log("a>=b is", a>=b);
console.log("a<=b is", a<=b);
console.log("a>b is", a>b);
console.log("a<b is", a<b);
}


// Logical operators
{
let c = 8;
let d = 5;

let cond1 = c > d;
let cond2 = c < d;
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("!cond2", !cond2);

} 

// conditional statements

// 1. if statement
 let mode = "dark";
 let color;
  if ( mode === "dark"){
    color = "black"
  }
  if ( mode === "light"){
    color = "white"
  }
console.log(color)

// 2. if-else statement
{
let age= 25;
if(age >= 18) {
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}

let x = 10;
if (x % 2 === 0){
    console.log("number is even")
}
else {
    console.log("number is odd")
}
}
// else-if statement
{
let year = 25;
if(year > 32){
  console.log("You are middle age man");
}
else if(year >26){
  console.log("you are mature man");
}
else if(year >22){
  console.log("you can bear responsibility now");
}
else if(year >18){
  console.log("you are ready to give direction to your life");
}
else{
  console.log("you are kid or teenager");
}
}

//Ternary Operator
// condition ? trueoutput : falseoutput
{
let age = 90;
let result = age>18 ? "adult" :"not adult";
console.log(result);
}

// prompt
let name = prompt ("enter your name");
console.log(name);

let number = prompt("enter a number");
if (number%5===0){
    console.log(number, "is a divisible by 5" );
}
else {
    console.log(number, "is NOT a divisible by 5");
}

// write a code which can give grades to students according to their scores:
let score = prompt("enter a score");
let grade;

if(score >= 90 && score <= 100){
    grade="A";
}
else if(score >= 70 && score <= 89){
    grade="B";
}
else if(score >= 50 && score <= 69){
    grade="C";
}
else if(score >= 40 && score <= 49){
    grade="D";
}
else if(score >= 33 && score <= 39){
    grade="E";
}
else {
    grade = "fail";
}
console.log(grade);


// LOOPS IN JS
// "FOR" LOOP
// 1. print 1 to 5
for(
    let i=1;i<=5;i++
){
    console.log("i =", i);
}
console.log("loop has ended");

// 2. calculate sum of 1 to 5
{
let sum=0;
for (i=1;i<=5; i++){
    sum=sum+i;
    console.log(sum);
}
console.log(sum);
console.log("loop has ended");
}

// "While" Loop:
// 1. print 1 to 5
let j = 1;
while (j<=5){
    console.log("j =", j);
    j++;
}

// Do- While Loop
let f = 10;
do{
    console.log("f =", f);
    f++;
}while (f<=5);

// for-of loop for string
let str ="SheetalTripathi";
let size= 0;
for ( let val of str){
    console.log("value is", val);
    size++;
}
console.log("string size=", size);

// for-in loop for object
let student ={
    name : "Sheetal",
    age: 21 ,
    CGPA: 9.1,
    isPass: true
};
for( let key in student){
    console.log(key, ":",student[key])
}


// print all the even numbers between 0 to 100.

for(let num = 0; num <= 100; num++){
    if(num % 2 ===0){
    console.log(num);
    }
}


//create the game where you start with any random game number. Assk the user to keep gussing the game number until the use enters the correct value.

let gameNum = "34";
let userNum = prompt("Guess the Game Number:");
while(userNum !== gameNum) {
   userNum= prompt("You entered the wrong number, Guess again");
}
console.log("congratulations, you entered the right number");

