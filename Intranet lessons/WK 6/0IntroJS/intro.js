console.log("Hello World its the Great Dev EDUAINA!!!!!!");
// print("My name is dev EDUA and i'm super exicited to finally be able tosay i have a working knowledge of javascript!!!!!!");

//variable keyword
// var, let, const

//var

let aName = 'Ighalo'

console.log(aName); 

//let
let names = 'Eduaina, Brenda'

console.log(names);
//string methods
console.log(names.toUpperCase())

// let result = names.toLowerCase();
// let result = names.lastIndexOf('d');
// let result = names.slice(5,10);
// let result = names.substr(3,11);
let result = names.replace('e', 'a')   //replaces only the first letter and the letter type matters

console.log(result)

//const
const numero = 200

console.log(numero);

//functions
function greeting(names) {
    names = 'Eduaina Brenda Ighalo'

    return `Hello ${names}`;
}
//string concatenation
console.log(aName + ' ' + names)

console.log (greeting());

// DATA TYPES

// 1. String 
'An example of a string'
"Another example of a string"

// 2. Numbers
29.118
30
// NaN- Not a Number e.g (5/hello)

//Number concatenation
let likes = 100;

let resulting = 'the blog has ' + likes + ' likes';

console.log(resulting)

//template string/template literal
 
let results = `The client ${names} ${aName} wants ${likes} likes by the end of the first 5 minuites`;
console.log(results)


// 3. Boolean
true/false

// 4. Array
['0, january, 5, februrary']

let people = ['victoria', 'alaso', 'emigbanam', 0, 'ochuko', 5];

console.log(people);

people[1] = 'ochuko'
console.log(people[1]); //to get only the name at position 1 of 0,1,2 etc
console.log(people[4])
console.log(people.length)


//Array methods



// 5. Objects
const person = {
    fistName: 'Bee',
    age: 22,
    houseaddress: 'Benin-city'
};

console.log(person);