// functions 
// steps performed when function gets call in js 

//1.Evaluation of arguments 
//2. Creation of Execution context ->   

function add(a , b){

    let sum = a+b;

    return sum;
    
}

let sum = add(4,2);
console.log(sum);


function get_obj(a){

    const obj = {
        id : 1,
        first_name : "Ram"
    }
    return obj;
    
}

console.log(typeof get_obj);
let obj = get_obj();
console.log(obj);


// scopes 

//block scope 
{
    let x = 2;
}
  //console.log(x)    x can NOT be used here

//local scope and functional scope

function xyz(){
    if(true){
        let x = 10;
        var y = 20;
    }
    console.log(y);  //will run beacuse y has functional scope
    console.log(x);   //give error because x is local scoped
}
// console.log(x)   give error 
//console.log(y) give error  
// both are functional scope and we cannot use it.

//global scope 
let a = 50;
var c = 50;
const s = 230;