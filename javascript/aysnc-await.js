// async return a promise
//await makes function to wait for a promise
// the await keyword can only be used with async function 
// await keyword makes the function pause the excution and wait for a resolved
// promise before it continues.
async function myfunction(){
    const a = "inside async function";
    console.log(a);
}

let res = myfunction();
//console.log(typeof(res));
//console.log(res);
console.log("hiii !!")
res
    .then((response)=>{
        console.log(response);
    })  
    .catch((error)=>{
        console.log(error);
    })


function myfunction2(){
    console.log("inside function 2")

    const b = new Promise(function(resolve,reject){
                   // resolve('Response 2 resolved ')
                   setTimeout(()=>{
                        resolve("myFunction-2 response");
                   })
                })
    return b;
}
let res2 = myfunction2();

res2  
    .then((response)=>{
        console.log(res2);
        console.log("response of res2", response);
    })

console.log(res2);



async function fn() {
    let promise = new Promise((resolve, reject)=>{
        // setTimeout(()=>{
             resolve('Heyy how are you ?')
        //},5000)
    })
    let res = await promise;
    console.log(res);
}
fn();

//error handling
async function fetchAPI(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
        console.log("Printing Data for json");
    }
    catch(error){
        console.log(error);
    }
}

fetchAPI();

const p = new Promise((res,rej)=>{
    res(1);
})



async function asyncReturn(){
    return p;
}

function basicReturn(){
    return Promise.resolve(p);
}
console.log("Printing P",p);
console.log("Printing basic return Promise" , basicReturn());
console.log("Printing async function P", asyncReturn());

// const controller = new AbortController();
// console.log("Printing Controller" , controller);
