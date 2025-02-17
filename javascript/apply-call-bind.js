function first(){
    console.log("first start");
    second();
    console.log("first end");
}

function second(){
    console.log("Second");
    third();
    console.log("second end");
}

function third(){
    console.log("third");
    console.log("third end");
    let a = 5;
    function fn(){
        console.log(a);
    }
}

second.call(first);

const person = {
    name : "alice",
    sayHello : function greet(surmane){
    console.log(`Hello ${this.name} ${surmane}` );
}

}
const person2 = {
    name : "Bob"
}
// function greet(){
//     let name = "sam"
//     console.log(`Hello ${this.name}`);
// }
//greet.call(person2);
//greet.call(person);

// let arg = ['Garry' , 'Micheal'];
person.sayHello.call(person2 , "Doe");


//apply()
function calculate( callback, args) {
    return callback.apply (null, args);
}

function sum(a, b , ...args) {
    let total = a+b;
    if(args.length > 0){
        for(value of args) {
            total += value;
       }
    }
    return total;
}
    const arguments = [5, 7 ,12];
    const result = calculate(sum, arguments) ;
    console. log (`Result: ${result}`);

    const maxi = Math.max.apply(null, arguments);
    console.log(maxi)

// bind()
const person3 = {
    name : "Harvard"
};

function greet2(){
    console.log(`Hello ${this.name}` );
}

let message = greet2.bind(person3);
message();