
//destrucutring allows you to unpack the values from 
// the arrays or properties from the objects into distinct variables.
// object destructuring 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address : {
        city : "Mumbai",
        zip : '451011'
    }
};

//access the key with original name
const { firstName , age , lastName} = person

console.log(`${firstName} ${lastName} has age ${age}`);

//accessing the key with new name 
const {firstName : f_name , lastName :l_name , age : new_age } = person;

console.log(`${f_name} ${l_name} has age ${new_age}`);

// nested destructuring 
const { address : {city , zip }} = person;
console.log(`${firstName} ${lastName} has age ${age} live in ${city}`);


//array destructuring 
const numbers = [1, 2, 3, 4, 5];
const [first , second , third ] = numbers;

console.log(first , second , third);

//skipping elements 
const [ , , , fourth , fifth ] = numbers;
console.log(fourth , fifth)

let a = 1;
let b = 2;
[a,b] = [b,a]
console.log(a , b);

//spread operator (...) used for expanding iterable data structures 
//like arrays , string , objects into indiviual element.

// expand the original array into indiviual elements 
const num = [1,2,3];
console.log(...num);
console.log(typeof (num));

//cpoying an array 
const copy = [...num];
console.log(copy);

//merging arrays 
let num1 = [10, 20, 30 ];
let num2 = [40, 50, 60 ];
const merged = [...num1 , ...num2];
console.log(merged);

// spreading in function arguments
console.log(Math.max(...num));

//spreading an object
const obj1 = {
    a:1,
    b:2
}
const obj2 = {
    c:3, 
    d:4
}

const mergedObject = {...obj1 , ...obj2};
console.log(mergedObject);

//adding properties to an object 
const user = {
    name : "john",
    age : 23
}

const updateUser = {...user , gender : 'male'};
console.log(updateUser);

// converting a string into array
const str = 'Hello';
const charArray = [...str];
console.log(charArray);


const users = [
    {id:1 , city: "mumbai"},
    {id:2 , city : "Delhi"}
];

const newUser = {id:3 , city:"Banglore"};
const addUser = [...users , newUser];
console.log(addUser)


console.log({...person});

// adding a new property to nested object
const updatePerson = {
    ...person ,
    address : { ...person.address , district : "Boravali"}
};

console.log(updatePerson);

console.log(person);
console.log(updatePerson);