
//creation of array
let arr = [1, "2" , 5 , "str"]

//method 

// push() -> to add one or more  element at the last
arr.push(43);
console.log(arr);

//pop() -> these removes the last element from the array and returns it
const del_element = arr.pop();
console.log("last element ", del_element , "removed");
console.log(arr);

// shift() -> removes the first element and return it 
const del_by_shift = arr.shift();
console.log(arr);
console.log(del_by_shift);

//unshift() -> add the one or more element at the starting of the array
// returns the length of th e array 
let length = arr.unshift(1 , 3);
console.log(arr);
console.log("new length is" , length);

// length -> get the length of the array 
console.log(arr.length);

// indexof() -> returns the index of the first occurene of element 
// if not found return -1
console.log("the index of 2 is : ",arr.indexOf("2"));

// includes() -> check if element is present in array 
// return a boolean value
console.log(arr.includes(2))


//slice(start , end) -> return a shallow copy of a portion of array 
// excluding last position  
const remain_arr = arr.slice(3)
console.log(remain_arr) 
console.log(arr.slice(2,4));   // shows the array from 2 to 3
console.log(arr.slice(-3));    // shows array of  2 element from the last 
console.log(arr.slice(3))     // shows the element from the 3 to the last


//splice() -> add , removes or replace the element in array 
// (starting_index , delete_count , add_item1, add_item2, ...)
// return an array 

//delete
let deleted_element = arr.splice(1 ,2 );  // delete 2 elements form index 1
console.log("Deleted Element : " ,deleted_element );
console.log(arr);

//adding element
arr.splice(2,0,20,30)
console.log(arr);

//replacing 
arr.splice(1,1,25);
console.log(arr);

console.log("====================== .forEach() method ========================")
//forEach Method            It calls a callback function, modify the original array.
arr.forEach( (val)=> {
    console.log(val);
})

arr.forEach(call_back_func);

function call_back_func(value){       // takes three parameter(value , index , array) in order wise 
    console.log(value);  
   
}


console.log("====================== .Map() method ========================")
// array.Map method 
// creates a new array by performing  a function on each array element.
// takes three parameter(value , index , array) in order wise


let arr2 = arr.map(call_back_func_map);

function call_back_func_map(val){
    if(typeof(val) == "number" ){
        val = val*2;
        return val;
    }
    return val;
}

console.log(arr2);

console.log("====================== .filter() method ========================") 
 
// .filter() method creates a new array with array elements 
// that pass a test or satisfy a certain condition.     
// takes three parameter(value , index , array) in order wise

let arr3 = arr.filter((val)=>{

        if(typeof(val) == "number"){
            return val;
        }
});
console.log(arr3);


console.log("====================== .reduce() method ========================") 

// .reduce() method creates runs a function on each and every element to produce a single value.
// works from left to right 
// reduce() method does not reduce the original array 
// take 4 argument (total / initial_value / previously_returned value  , value , index , array)

//sum of all element
let arr4 = [2,4,5,45];


let  sum = arr4.reduce( (total, val) => {

    return (total + val);
}, 0 )
console.log(sum);

//finding maximum element 
let  max_value = arr4.reduce( (prev_val, val) => {

    return val > prev_val ? val : prev_val ; 
} , arr4[0]);
console.log(max_value);

//counting occurence of elements

let frequency_obj = arr4.reduce((freq, val) => {
      freq[val] = (freq[val] || 0) + 1;
      return freq;
    }, {});

    console.log(frequency_obj);

console.log("====================== .every() method ========================") 
// .every() method
// checks if all values are passing a test  , returns a boolean value 

let all_over_4 = arr4.every( (val) => {
    return val > 4 ;
});

console.log(all_over_4);

console.log("====================== .some() method ========================") 
// .some() method checks if some array values are pass a test.
//return a boolean value
let check_some = arr4.some( (val) =>{
     return val > 4;
})
console.log(check_some);

console.log("====================== Array.from() method ========================") 
//returns an Array object from any object with a length property or any iterable object.

let string_array = Array.from("ABCDEFGHI");
console.log(string_array)


