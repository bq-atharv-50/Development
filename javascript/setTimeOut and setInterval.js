//setTimeout() if you want to run something after particular time
//setTimeout takes 2 things:
//a callback
//the number of milliseconds after which to run the callback

function buzzer(){
    console.log("EnNNNNGGGG");
}
setTimeout(buzzer , 500);

function buzzer2(){
    console.log('buzzer2')
}

console.log("starting");
let setTimeoutId1 = setTimeout(buzzer , 500);
console.log("finishing");

let setTimeoutId2 = setTimeout(buzzer2 , 0)

console.log(setTimeoutId1);
console.log(setTimeoutId2);

//top stop 
clearInterval(setTimeoutId1);
clearInterval(setTimeoutId2);

//setInterval() -> when you have to call something at every after particular time.

//setInterval() and then it takes 2 arguments:
//a reference to a function like buzzer
//how often you'd like to run it


let intervalId = setInterval(buzzer , 2000);

//stop time interval
clearInterval(intervalId);

// programme that runs every 2 sec for 30 sec

let count = 0;

let intervalId3 = setInterval( ()=>{
    count++;
    console.log(` message ${count}`);

    if(count == 15){
        clearInterval(intervalId3);
        console.log("interval stopped");
    }
}, 2000);

// other approach for run at every 2sec for 30 sec
let cnt = 0;
let intervalId4 = setInterval( ()=>{
    cnt++
    console.log(`other approach ${cnt}`);
}, 2000);

setTimeout( ()=>{
    clearInterval(intervalId4);
}, 30000);