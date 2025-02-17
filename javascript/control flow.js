// if-else , else-if

const num = 0;

if(num > 0){
    console.log("positive Number");
}
else if( num < 0){
    console.log("negative Number");
}
else{
    console.log("Number is Zero");
}

//switch statment

const day = 5;

switch (day){
    case 0 :
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thrusday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid value");
}

//loops
for(let i=1; i<10; i++){
    console.log(i);
}

//while loop
let n = 0;
while( n <= 5){
    console.log(n);
    n++;
}

//do-while loop
let i=1;
do{
    console.log(i);
    i++;
}while(i < 1 );

// for-in loop
//iterate over the properties of objects .
//  it only iterate over keys of an object.
const obj = {
    nam : "Ashsih",
    age : {
        gender : "m"

    },
    address : "mumbai"
}

for(let key in obj ){
    console.log(key , ":" , obj[key]);
}

// for-of loop
//The for…of loop is used to 
//iterate over iterable objects like arrays, strings, or sets. 

let arr = ["ram" ,1 , 'dw']
let  str = "hello"
for(value of arr){
    console.log(value);
}

for(val of str) {
    console.log(val);
}


