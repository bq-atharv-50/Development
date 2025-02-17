// A closure is a function that remembers the variables
//from its outer scope, even after the outer function 
// has finished execution.
//Closures remember their variables because of lexical scoping—they 
// maintain a reference to the environment in which they were created.
function outer(){
    let script = "I am from outer scope";
    return function inner(){
        console.log("I am from inner scope");
        console.log(script);
    }
}

let return_function = outer();
return_function();

// create private variable
function counter(){
    let count = 0; // private variable 
    return {
        
        increment : function(){
            count++;
            console.log(count);
        },
        decrement : function(){
            count--;
            console.log(count);    
        }
        
    }
}

const mycounter = counter();

mycounter.increment();
mycounter.increment();
mycounter.decrement();