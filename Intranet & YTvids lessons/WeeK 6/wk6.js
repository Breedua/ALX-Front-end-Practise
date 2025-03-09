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

//string literals
greet = `Hello ${aName} ${names}`
console.log(greet)

console.log(greeting());

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

console.log(true, false)

        //Methods that can return booleans
    let email = 'nongenius27@gmail.com';
    let myLoves = ['victoria', 'alaso', 'emigbanam', 'ochuko', 'emily', 'david', 'valentine', 'jane'];

    // let emailResult = email.includes('@'); // this method returns a boolean
    let emailResult = email.includes('?') ;
    let friends = myLoves.includes('ochuko');

    console.log(emailResult);
    console.log(friends)

        //Comparison operators also return boolean
    let age = 29;

    console.log(age==24); //f
    console.log(age==29); //t
    console.log(age!=24); //t
    console.log(age<24); //f
    console.log(age>24); //t
    console.log(age>=24); //t
    console.log(age<=24); //f
    
// 4. Array
let people = ['victoria', 'alaso', 'emigbanam', 0, 'ochuko', 5];

console.log(people);

people[1] = 'ochuko'
console.log(people[1]); //to get only the name at position 1 of 0,1,2 etc
console.log(people[4]);
console.log(people.length);


//Array methods
// let show = people.join('-') //adds whatever is inbetween the brackets to each word of the array, it could be '-', ',', '.' etc

// let show = people.indexOf('emigbanam'); //Gets the index of the argument

// let show = people.concat(['emily', 'david', 'valentine', 'jane']); //used to join/concatenate arrays

let show = people.push('jane'); //Returns the length of the new array --- Can be classified as a destructive method as it changes the original value of the array

show = people.pop(); //Removes the last value added inthe array, is also a destructive method

console.log(show);


// 5. Objects
const person = {
    fistName: 'Bee',
    age: 22,
    houseaddress: 'Benin-city'
};

console.log(person);

//Type Conversion
let score = '100';

score = Number(score); //first convert the string to a number before adding else it becomes concatenation
console.log(score + 1);

console.log(typeof score); // to check for the data type

let convo = String(50);
console.log(convo, typeof convo);
console.log(typeof convo)

let cvo = Boolean(29) //converting to boolean [Both negative and whole + positive numbers give true, zero in any format gives false]
