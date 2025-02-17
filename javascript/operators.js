//1.Arthematic operator ( + , - , * , /, %)
let a = 5;
let b = 2;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b);


//2.Assignment operators ( = , += , -= , *= , /=, %=)
let n = 5;
console.log(n += 5);
console.log(n -= 5);
console.log(n *= 5); 
console.log(n /= 5);
console.log(n %= 5);

//3.comparison operators (== , === , !== , > , < , >= , <= )
//return a boolean value
console.log(5 == 2);
console.log(5 === 2); //check value and type 
console.log(5 !== 2); 
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);

//4.Logical Operators (!, || , && )
let c = 5;
let d = 6;
console.log( !c );  //false
console.log( c || d ); //5
console.log( c && d); // 6
let e=true;
let f=false;
console.log( !e );  //false
console.log( e || f ); 
console.log( e && f); 

//5.bitwise operator (& , | , ^ , ~)
console.log( 5 & 6);
console.log( 5 | 6);
console.log( 5 ^ 6);
console.log(  ~6);

//6.ternary operators (? : )
const age = 18;
const response = age >= 18 ? "Eligible to vote " : "Not Eligible to vote" 
console.log(response)


//7.comma operator ( , )
let n1 , n2;
const res = (n1=1 , n2=2  , n1+n2);
console.log(res);

//8.uranry operators ( ++ , --) 
let g=5;
console.log(++g);
console.log(g++);
console.log(--g);
console.log(g--);

//9.relational operator (in , instanceof)
// The in-operator in JavaScript checks if a specified property exists 
// in an object or if an element exists in an array. It returns a Boolean value.

let lang = ["C++" , "java" , "python"];

console.log(1 in lang);
console.log(3 in lang);

const student = {
    id : 1,
    student_name : "wick",
}

console.log("student_name" in student);
console.log("address" in student);

//The instanceof operator in JavaScript tests if an object is an 
//instance of a particular class or constructor, returning a Boolean value.
let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);

//10.chaining operator( ?. )
// allows safe access to deeply nested properties
// if property doesn't exsist than it gives undefined
const obj = {
    emp_name : "Sam",
    address : {
        state : "U.P",
        district : "Lucknow"
    },
};
console.log(obj.address?.district)