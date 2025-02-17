//functions 
//A JavaScript function is a block of code designed to perform a specific task. 
//Functions are only executed when they are called (or “invoked”).

// syntax
function function_name(){
    // function body 
 }
// function call
function_name();

// There are diffrent type of functions we use javascript

// 1.Function declaration 
// most common way to define the functions in js.
// they are hoisted at the top of the thier scope.

function greet(name) {
    console.log(`Hello, ${name}!`); 
}

greet("Alice");


// 2.Function expression
// created when a function is assigned to a variable.
// they are not hoisted.
// can be called with the variable name only
const greet2 = function fn(val){
    console.log(`Hello ${val}`)
}

//fn("bob");  gives error
greet2('Bob');


// 3.Anonymus Function 
// function do on have function name.

let greet3 = function(naam){
    console.log(`Hi ${naam}`)
}

greet3("John");

// 4. Arrow function 
// concise way to write funcions.
// they do not have thier own this context and are not hoisted.
// for singl expression you can ommit the curly braces
// and return keyword.
const greet4 = (value1) => {
    console.log(`Hi ${value1}`)
}
greet4("Sam");

//5.Immediately Invoked Function Expressions (IIFE)
// An IIFE that runs as soon as it is defined.
// useful for intialiazing code.
(
    function(value2){
        console.log(` Hii ${value2}`);
    }
)("Dave");


// 6.Generator Function
// this function are special functions that can pause 
// execution and resume it at a later point.
//They are defined using the
//  function* syntax and use the yield keyword.

function* greet5(){
    
    console.log("Hii Execution 1");
    yield "First";
    console.log("Hii Execution 2");
    yield "Second";
    console.log("Hii Execution 3");
    yield "Done";
}
let response = greet5();
console.log(response.next().value);
console.log(response.next().value);
console.log(response.next().value);

//7. Async Function
//marked by the async keyword, enable writing asynchronous 
//code in a more readable style using await. 
// simplify handling asynchronous operations, such as network 
// requests, file operations, fetching data from an API, etc.

async function fetchData() {
    let data = await fetch('https://fakestoreapi.com/products/');
    let jsonData = data.json();
    return jsonData;
}
fetchData().then( (data) =>{
    console.log(data);
});

//8.Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;

myFunction(2, 4);

//9. callback function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);