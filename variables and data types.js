console.log("================= var Keyword ==============")
var a=20;
{
    console.log(a);
    var a =10;
    var a = 5;
    a++;
    increment();
    function increment(){
        var a= 3;
        a += 2;
        console.log(a);
    }
    console.log(a);
    increment_parameter(a);
    function increment_parameter(a){
        a++;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

console.log("================= let Keyword ==============")

let n = 10;
{
    //console.log(n); ERROR
    let n = 1;
    n = 2;
    console.log(n);
    increment();
    function increment(){
        let n = 5;
        n++;
        console.log(n);
    }
    console.log(n);
    let_increment_parameter(n);
    function let_increment_parameter(n){
        n++;
        console.log(n);
    }
    n += 2;
    console.log(n);
}
console.log(n);

console.log("================= const Keyword ==============")

const x = 10;
{ 
    //console.log(n); ERROR
    const x = 1;
    //x = 2;
    console.log(x);
    increment();
    function increment(){
        const x = 5;
        //x++;
        console.log(x);  
    }
    console.log(x); 
    let_increment_parameter(x);
    function let_increment_parameter(x){
        x++;
        console.log(x);  
    }
    //x += 2;
    console.log(x);
}
console.log(x); 

//   Data types 
//primitive Data types 

// 1.String 
var str = "Hello world !";
var str2 = 'hii';
let str3 = `can embed ${str}`

console.log(str);
console.log(str2);
console.log(str3);


// 2. Numbers
var n1 = 3;
var n2 = 3.6;
let n3 = Infinity;
console.log(n1);
console.log(n2);
console.log(n3);

// 3 boolean
let b1 = true;
let b2 = false;
console.log(b1);
console.log(b2); 

// 4. undefined
let u;
//const u1;  give error
console.log(u);

//5.null
var N = null;
console.log(N);
console.log(typeof N); // object

//6.symbol  unique and immutable primitives values, helps in create unique keys in objects  
var symbol1 = Symbol("Hello")
console.log(symbol1);

var symbol2 = Symbol("Hello")
console.log(symbol2);

console.log(symbol1 == symbol2)

//7.BigInt
let b = BigInt("01010101001010101001111111111111111");
var bigInteger =  234567890123456789012345678901234567890;
console.log(b);
console.log(bigInteger);

//Non-primitive data types
//8.objects
const obj = {
    id:1,
    emp_name : "John"
}

console.log(obj);
console.log(obj.id);
console.log(obj.emp_name);

//9.arrays
let arr =[1,2,"ar",'a',5];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

console.log(typeof arr); //object


//10.NaN  //represent computational error
let nan1 = "a";
let nan2 = 2;

console.log(isNaN(nan1));
console.log(isNaN(nan2));
console.log(typeof NaN);
console.log(0/0);
console.log(Math.sqrt(-1))
console.log(NaN === NaN);