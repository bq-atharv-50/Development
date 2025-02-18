
//making of object

const age = 100;

const person = {
    name : 'sam',
    age ,        //  this is equal to age : age 
    "cool-dude" : true,
    'really cool dude' : true,
    '777' : false,
    dog : "snickers",
    clothing : {
        shirts : 10,
        pants : 2,
    }
}

const person2 = new Object({
    name : 'Ram',
    age : 19
});


// printing 
console.log(person);
console.log(person2);

//ading a new key value pair
person.job = 'web-developer';
person['district'] ='thane'
Object.assign(person , {'street-no' : 20 });
// work if object is not declared using const 
//person = { ...person , city:'mumbai'};

// changing the value for key
person.age = 50;
person['dog'] = 'german'

console.log(person)

// delete a object property
delete person.job;
// person.job = null or undefined

console.log(person);

//printing all keys  return an array  
let keysarr = Object.keys(person);
console.log(keysarr)

//printing all value return array
let valuesarr = Object.values(person);
console.log(valuesarr);

//print all key value pair return key value pair as sub arrray
let entriesArr = Object.entries(person);
console.log(entriesArr);


//assign() used above 

// prevent modificaion (adding , deleting , updating properties)
const personref = Object.freeze(person);
console.log(personref);


// seal() prevents adding or deleting but allow modifying exisisting ones
Object.seal(person);

// hasOwnProperty() checks if an object have specific property
console.log(person.hasOwnProperty('age'));

// create() create a new object using an exsisting object as a prototype
const new_person = Object.create(person);
console.log(new_person.age)
console.log(" printing person_new " , new_person);


// fromEntries() converts an array of key value pair into object
let arr  = [
    ['a' , 1],
    ['b', 2]
]
let new_obj = Object.fromEntries(arr);
console.log(new_obj);

// getOwnPropertyName() return an array of all property name 
// (including non - enumerable properties)

console.log(Object.getOwnPropertyNames(person));