/*
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
let age = 9;
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

//STRING
//  1. CREATE STRING
{let str = "sheetal tripathi";
//  2. STRING LENGTH
console.log(str.length);
// 3. STRING INDICES
console.log(str[1], str[2], str[3] );
}
// Template literals
// e.g. ${obj.item},${obj.price}
{
let obj = {
    item : "pen",
    price : 10,
}
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
}


// escape character
// e.g:----- \n and \t  and \n is considered as single character while getting its length. 

// 1. str.toUpperCase()
// 2. str.toUpperCase()
// 3. str.trim()
// 4. str.slice(0 , 4)
// 5. str1.concat(str2)
// 5. str.replace(currentValue, newValue)
let str1 = "Sheetal\tTripathi";
let str2 = "    Sheetal Tripathi    JS    ";
let newString = str1.toUpperCase() // same:- str.toLowerCase()
console.log (newString);
console.log (str2);
console.log (str2.trim());
console.log (str2.slice( 0,4));
let res = str1.concat(str2);
console.log(res);
let greet="hello"
console.log(greet.replace("he","go"));

// ARRAYS
{
let name = ["rahul", "raja", "ram", "raj", "rani", "raha"];
let marks =[54, 66,84, 93, 92, 74]
console.log(marks);
console.log(marks.length);

// for( let i=0; i < name.length; i++){
    // console.log(name[i]);
// }
for (let el of name) {
    console.log(el.toUpperCase());
}
}
// array with student's marks and find the average marks of entire class.
{
let mark =[85,97,44,37,76,60];
let sum = 0;
for(let value of mark){
    sum+=value;
}
console.log(sum);
let avg = sum/mark.length;
console.log(avg);
}

// Array eith price of 5 items. all the items have an offer of 10% off on them, change the array to store final prices after applying offer.
{
let price =[250, 645, 300, 900,50];
index = 0;
for(let values of price){
    values = (values/100)*90;
    console.log(`values at ${index} is ${values}`);
    index++;
}
}


//FUNCTIONS
{
function sum(a,b){
    console.log(sum = a+b) ;
}
sum(3,5);
}

// or we can write it using return...
{
    function sum(a,b){
        s = a+b ;
        return s;
    }
    let val= sum(7,8);
    console.log(val);
}

{
    function mul(a,b){
        s = a*b ;
        return s;
    }
    let val= mul(7,8);
    console.log(val);
}  
//Arrow function
const arrowSum =(a,b) => {
    console.log(a+b);
}
arrowSum(9,2);

const arrowMul =(a,b) => {
    console.log(a*b);
}
arrowMul(9,2);

// write a function in javascript to return the count of vowels in string.
function countVowels(str) {
    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Initialize a counter
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(countVowels("aeiouAEIOUMGAIJAOAL")); // Output: 15

// same function using arrowFunction
const countVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return [...str].filter(char => vowels.includes(char)).length;
};

// Example usage:
console.log(countVowel("Hello World!")); // Output: 3

// ForEach Loop in arrays
{
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});
}
let arr = ["maharashta","delhi","kerala","Goa","Bihar"];
arr.forEach((val)=>{
    console.log(val.toUpperCase()); 
}
);

//print the square of each value of Array using the forEach loop.
let nums =[1,2,3,4,45];
nums.forEach((val)=>{
    val= val*val;
    console.log(val);
}
);

// some more Array methods
//1. MAP:- creates a new array with the results of some operation. The value its callback returns are used to form new array.
// arr.map(callbackFnx(value, index, array))
{
let arr = [9,3,59,30,14];
let newArr = arr.map((val)=>{
    return val*2;
});
console.log(newArr);
}

// 2. FILTER :- creates new array of elements that give true for a condition/filter. e.g. all even elements.
{
    let arr = [9,3,59,30,14];
    let newArr = arr.filter((val)=>{
        return val%2===0;
    });
    console.log(newArr);
}

// 3. REDUCE:- perform some operations & reduces the array to a single value. It returns that single value.
{
const numbers = [1, 2, 34, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // Output: 46
}

{
    const numbers = [1, 2, 34, 4, 5];
    
    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue? accumulator: currentValue;
    });
    
    console.log(sum); // Output: 34
}
*/

// Objects

const students  = {
    saksham : 98,
    vinit : 52,
    dheeraj:80,
    printValue(){
        console.log("saksham's marks is", students.saksham);
    }
};
students.printValue();