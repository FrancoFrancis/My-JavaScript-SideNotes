



//  JAVASCRIPT COURSE/FUNDAMENTALS NOTES 💛;

// 🚀NOTE: THE SIGNS "// >>" MEANS A NEW TOPIC


//>> GLOBAL SCOPE VARIABLES
var myGlobal = 20

function func1() {

    oopsGlobal = 50 + " hu"
}

function func2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }~

    console.log(output);
}

func1();

func2();  



// >>LOCAL SCOPE VARIABLES
function myLocalScope() {

    var myVar = 23;
    console.log(myVar);
}
myLocalScope();
// this is gonna output an error mesage cos its in localscope
console.log(myVar);



//>> ADDING AND POPPING OFF STRINGS

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();

}

var testArr = [1, 2, 3, 4, 5,];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));





// >> Golf code game with chained if statements

var names = ["Hole-in-one", "Eagle",
    "Birdie", "Par", "Bogey", "Double bogey", "Go home"]

function golfScore(par, strokes) {


    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }

}

console.log(golfScore(5, 8));


// >> Default option in switch statements

function CaseInSwitch(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "alpha";
            break;
        case "b":
            answer = "beta";
            break;
        case "c":
            answer = "gama";
            break;
        case "d":
            answer = "delta";
            break;
        default:
            answer = "invalid number check and try again";
            break;
    }

    return answer;
}

// note a value passed must be a string letter
console.log(CaseInSwitch("a"))




// >> Multiple identical options with swith statements 
function multiplyCases(val) {
    answer = ""
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "opps invalid number"
            break;
    }
    return answer;

}


console.log(multiplyCases("11"))





//>>  Switching from else if statements to SWITCH ⏬

function chainToSwitch(val) {

    answer = "";
    if (val === "Bob") {
        answer = "Marley;"
    } else if (val === 42) {
        answer = "Correct answer"
    } else if (val === 1) {
        answer = "There is no #1"
    } else if (val === 99) {
        answer = "Missed me by this much"
    } else if (val === 7) {
        answer = "Ate seven"
    }

    return answer;

}

console.log(chainToSwitch(7))

// the switch bellow

function chainToSwitch(val) {
    answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "Correct answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much "
            break;
        case 7:
            answer = "Ate seven"
            break;
        default:
            answer = "oops invalid input"
            break;

    }

    return answer;

}

console.log(chainToSwitch(72))







// >> instead of using if else statements to return answers 
// equality operators on default return boolean values

function isLess(a, b) {
    return a <= b;
}
console.log(isLess(220, 220))




// >> Returningg early from a function
function abTest(a, b) {
    // you can return early from a string theres an if statement below 
    // it checks to see if the value passsed is les than0 then it returns 
    // undefined without going further 
    if (a < 0 || b < 0) {
        return undefined;
    }


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}


console.log(abTest(-2, 4));


// >> counting cardds game with js
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

    var holdBet = "hold"
    if (count > 0) {
        holdBet = "bet"
    }

    return count + " " + holdBet;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc('K'));






// >> OBJECTS {} they are similar to ARRAYS[] but
//  properties are used to access them 

var myDog = {
    "name": "Attack",
    "legs": 4,
    "tail": 1,
    "friends": []
}



// >> you can access objects with the dot. notation

var testObject = {
    "name": "Francis",
    "shirt": "Jacket",
    "shoes": "Airforce1"
};


var customerName = testObject.name;
var shirtValue = testObject.shirt;

console.log(customerName);
console.log(shirtValue);







// >> accessing object props with the bracket []  notation
// in cases where the property names are two words 

var testObject = {
    "My name": "Francis",
    "His shirt": "Jacket",
    "Their shoes": "Airforce1"
};


var customerName = testObject["My name"];
var shirtValue = testObject["His shirt"];

console.log(customerName);
console.log(shirtValue);





// >> you can acccess objectt properties with variable

var testObject = {
    12: "Brighto",
    16: "Montana",
    18: "Already won"
}
// variable assigned here
playerNum = 18;
player = testObject[playerNum];

console.log(player);






//>> you can update object props

var testObject = {
    "name": "Brighto",
    "city": "Montana",
    18: "Already won"
}
// updated variable name assigned here
testObject.name = "Happy Brighto";

console.log(testObject.name);




//>> DELETE  a property from an object
var myDog = {
    "name": "attack",
    "legs": 4,
    "tails": "2tails"
};
// using the delete keyword it deletes the legs off myDog
delete myDog.legs

console.log(myDog);




//>> Adding NEW PROPERTIES to an object
var myDog = {
    "name": "attack",
    "legs": 4,
    "tails": "2tails"
};
// new proop bark with value woof
myDog["bark"] = "woof";

console.log(myDog);




//>> USING OBJECTS FOR LOOKUPS
// objects can be used as key value storage like a dictionary
// you can use objects to  lookup values
// instead of a switch statement and object is used

function codeLangLookup(val) {

    var reusult = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Denver",
        "delta": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    return result;

}
console.log(codeLangLookup("delta"));




// >> YOU can test an objectt to see if it has a property
// using the .hasOwnProperty keyword
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "ooops not found";
    }
}
// the parameter petuy is checkProp which will return  not found
console.log(checkObj("petuy"));




// >> accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passengers seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
// this is where it happens the brackets is used because theres spacing in the
// name "glove box"
var gloveBoxContent = myStorage.car.inside['glove box'];

console.log(gloveBoxContent);



//>> Manipulating complex objects 
// a javascript object is a way of manipulating complex data 
// you store an array in an object and in the object store another object



// >> accessing nested arrays []  
// an array with two objects and each object has two properties
// 

var myPlants = [
    // objecct 1
    // two properties in each object
    // second key list has its props in an array
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    // object 2
    // two properties in each object
    // second key list has its props in an array
    {
        type: "trees",
        list: [
            "firs",
            "pine",
            "birch"
        ]
    }

];
// we used the . notation and the bracket notation get access
var secondTree = myPlants[1].list[1];
console.log(secondTree);




// >> RECORD COLLECTION CHALLENGE
// its an object of record colllection and each 
// collection has an id 

var collection = {

    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "track": [
            "let it rock",
            "You give love a bad name"
        ]
    },

    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "Little red corvette"
        ]
    },

    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },

    "5439": {
        "album": "ABBA Gold"
    }
};


    CLEAN FUNCTION WITHOUT COMMENTS
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (value === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
};




//  >> WHILE LOOps run while a certain condition is true 
// and stops when it isnt true 

var myLoop = [];

var i = 0;
while (i < 50) {
    myLoop.push(i);
    // the "++" increments i
    i++;
}

console.log(myLoop);




// >> ITERATION WITH FOR LOOPS
// FOR LOOPS ARE THE MOST COMMON LOOPS IN JAVASCRIPT

var myArray = [];
// for a forloop you have to have variable you initialize for the for loop
// once condition evaluates into false we break out of the loop
// 'var i = 0' is the initialiation then the condition 'i < 5'
//  then the expression 'i++' 
for (var i = 1; i < 6; i++) {
    // we iterated six times and everytime we pushed
    // a new digit into the array. 
    myArray.push(i);
}

console.log(ourArray)

// clean code no comments
var myArray = [];
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(ourArray)


// >> ITERATE ODD AND EVEN NUMBERS WITH THE FOR LOOP

// Array of even numbers(divisible by 2)

myArray = [];

for (var i = 0; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Array of odd numbers

myOddArray = [];
// We are starting at 1 not  zero so this should
//  give us odd numbers
for (var i = 1; i < 10; i += 2) {
    myOddArray.push(i);
}

console.log(myOddArray);


// >> Count backwards with a For loop 

// Even numbers
var myArray = [];

for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// Odd numbers this will get all the odd numbers 
// Unto the array

var myArray = [];

for (var i = 9; i > 1; i -= 2) {
    myArray.push(i);
}

console.log(myArray);




//>> USING FOR LOOP TO ITERATE THROUGH AN ARRAY

//  CLEAN CODE 

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// CODE WITH COMMENT

var myArr = [2, 3, 4, 5, 6];
var total = 0;
//"var i = 0;" means we are going to start iterating at 0
//then "i < myArr.lenght" .lenght which is 4 ie num of elements  
//in the array then we increment i by 1 "i++"  
for (var i = 0; i < myArr.length; i++) {
    // "total +=" means "total" which is being declared as "0" 
    // equals "total" + whatever the total may be,
    // so "+= myArr [i];" means we are going 
    // to keep adding to the "total" whatever
    // is in the array at index [ ] so it starts at 
    // 0,1,2,3,4 "[2,3,4,5,6]" so it basically
    //  gonna add up all the numbers in the array "[2,3,4,5,6]"
    total += myArr[i];
}

console.log(total);



//>> ITERATE WITH DO... WHILE LOOPS

var myArray = [];
var i = 4;
// while loops only runs when condition is true 
//do  while loops run then check to see if the condition is 
// true if its false it breaks out of the loop
do {
    myArray.push(i);
    i++;
} while (i < 15)

console.log(i, myArray);

// >> NESTING FOR LOOPS 
// When you have a multi dimentional array you can use 
// nested for loops to iterate through an array
// 

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }


    return product;

}

var product = multiplyAll([[2, 3], [14, 43], [7, 9, 22]]);

console.log(product);



// >>> PROFILE LOOKUP CODE CHALLENGE

// we create a lookupProfile function where we pass in a
// name and a prop and its going to return the value of that 
// property e.g we pass in name  AKINTATAYO AND PROP "NUMBER" 
// it should return unkmowm if the name passed in doesnt represent any context
// return "no such contact"  and if there no property returen "no such property"

var contacts = [
    {
        "firstName": "Akira",
        "LastName": "Laine",
        "number": "08103482337",
        "likes": ["Pizza", "Coding", "Brownie"]
    },
    {
        "firstName": "Serah",
        "LastName": "Ishaku",
        "number": "08103889337",
        "likes": ["Pizza", "Sleep", "Money"]
    },
    {
        "firstName": "Akintayo",
        "LastName": "Shedrach",
        "number": "Unknown",
        "likes": ["Code", "Water", "Sugar"]
    },
    {
        "firstName": "Anna",
        "LastName": "Ishaku",
        "number": "07033151242",
        "likes": ["God", "Kosay", "Her children"]
    },
];


//CLEAN CODE, CLEAN FUNCTION NO COMMENTS
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }

    return "No such contact ";
}

var data = lookUpProfile("Anna", "likes");
console.log(data);

// FUNCTION WITH COMMENTS

function lookUpProfile(name, prop) {
    // we iterate through each element in the contacts list array  
    for (var i = 0; i < contacts.length; i++) {
        // we then check to see if the "name" is in the array 
        // so we check each item to see if its name that was passed in 
        if (contacts[i].firstName === name) {
            // if the name passed in is in the array we return the
            // value passed which is = "return contacts[i][prop]"
            // however if the value of the property does not exist
            // we return "No such property" in Js theres a cool way
            // to do that, with the OR "||" operator
            return contacts[i][prop] || "No such property";
        }
    }
    // if the name passed in is not in the array we return 
    // "No such contact"
    return "No such contact ";
}

var data = lookUpProfile("Anna", "likes");
console.log(data);


// >> GENERATE RANDOM FRACTIONS

function randomNumber() {


    // the "Math.random" returns a random decimal number
    return Math.random();
}




console.log(randomNumber());



// >>> USE THE PARSE INT FUNCTION 

function convertToInteger(str) {
    // "parseInt" turns the number into an integer
    return parseInt(str);
}

// string here will be turned into an integer 
console.log(convertToInteger("5898"));




//GETTING A RANDOM NUMBER BETWEEN 0 AND 9

// var randomNumberBetween0and9 = Math.floor(Math.random() * 20);


function randomWholeNum() {

    // "Math.random" can never be 1 its a num between 0 & 1
    // "Math.floor" gets us to round down to get a random
    //  number between 0 & 9
    return Math.floor(Math.random() * 10);

}

console.log(randomWholeNum());



// >>> Use the conditional (Tenary) Operator
// How the tenary operator is used, its like a
// One line if else expression 
// condition ? statement-if-true : statement-if-false; 


function checkEqual(a, b) {

    return a === b ? true : false;
}

console.log(checkEqual(2, 2));


// >>> USE THE PARSE INT FUNCTION WITH RADIX 
// NOTE*** The radix specifies the base of the number
// in the string 2g base 2, 7, 8 a base 2 would be  binary
// so thats one of the most 


function convertToInteger(str) {
    // pass in the default as base 2 instead of base
    //10 so the computer knows its a binary number
    return parseInt(str, 2);

}

console.log(convertToInteger("10011"));






// >>  DIFFERENCE BETWEEN VAR AND LET KEYWORD 1 

// The "let" keyword does not let you declare a variable twice 
// furthermore with the "var" keyword, the variable "catName" is declared twice

// if we change var with let below its gonna throw back an error message 
//"undefined" or say "we have made multiple declarations" which is a good thing
// because we would not want to declare a variable twice in thesame scope

var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    // "use strict" enables strict mode in JS 
    // It catches common coding mistakes and unsafe coding actions
    // We can use "use strict" at the top of a full javascript file
    // or in a funtion to catch coding mistakes eg when create a variable
    // and dont declare it with var, let or const.
    "use strict";

    catName = "Oliver";
    quote = catName + "says Moew";
}

console.log(catTalk());

// CLEAN CODE
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + "says Moew";
}

console.log(catTalk());







// >> COMPARING SCOPES OF VAR & LET KEYWORDS
// >> DIFFERENCE BETWEEN VAR AND LET KEYWORD 2 

// Another major difference between the var and let keyword is,
// when a variable is declared with the var keyword it is declared
// GLOBALY(global scope) or locally(local scope) if declared inside
// a function however  with let, the scope of let is limited to
// the block, statement or expression it was declared in


// CODE WITH COMMENTS
function checkScope() {
    "use strict";
    // let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is:", i);
    }
    // i below is gonna log out "Block scope i is: block scope"
    // cos we are using the let keyword in the block above
    // Now while the let declaration above has been commented out 
    // trying to access it below is gonna return an error  saying
    // not defined because the let above is being declared in a block
    // of code if we put var instead of let it willl now be accesible
    console.log("Function scope i is:", i);
    return i;
}

checkScope();

// CLEAN CODE
checkScope();
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scpoe i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

checkScope();




// >>> Declare a Read-Only Variable with the const keyword


// Const has all the features of let but 
// its Read only and cannot be reassigned afterwards
// this can be very helpful to prevent you
// from accidently making mistakes later
// when you dont wanna reassign a 
// variable twice you use the CONST


// CODE WITH COMMENT
function printManyTimes(str) {
    "use strict";
    // when using const its very common to use
    // all caps its a way to remember its a const
    // EG SENTENCE bellow
    const SENTENCE = str + " is cool";
    // for best practice we should only
    // use const and let together in our code
    for (let i = 0; i < str.lenght; i += 2) {
        console.log(SENTENCE);
    }
    return SENTENCE;

}


console.log(printManyTimes("freecodecamp"));

// CLEAN CODE
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + "is cool";
    sentence = str + "is amazing!"

    for (var i = 0; i < str.lenght; i += 2) {
        console.log(sentence);
    }

}

printManyTimes("freeCodeCamp");


// >> MUTATE AN ARRAY DECLARED WITH CONST

const s = [5, 2, 7];
function editInPlace() {
    "use strict";


    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();
console.log(s);




// >> PREVENTING OBJECT MUTATION

// our objects can still be mutated(changed) even if 
// declared with const
// object.freeze will prevents data mutation


// CODE WITH COMMENTS
function freezeObj() {
    "use strict"

    const MATH_CONSTANTS = {
        PI: 3.14
    };
    //This freezes MATH_CONSTANTS from changing because
    //  we dont want to change PI.
    // So the code skips the try and goes straight to 
    // the catch and console.log the error message
    // So whenever we have an object an we dont want any 
    // item in the object to change we use object.freeze
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);




// >> USE ARROW FUNCTIONS TO WRITE CONSISE ANONYMOUS FUNCTIONS



// the function below is called an anonymous function it doesnt have a name
//  assigned before the function keyword
// whenever we have an anonymous function we can convert it into an arrow
// function which makes it quicker to write, thanks to JavaScript

// this is thesame thing as FUNCTION 1 but we can still shorten it more
// if we are just returning 1 value
var magic = () => {
    return new Date();
};

// SHORTENED ! we removed the curly braces and the return keyword
const magic = () => new Date();


// FUNCTION 1 BEFORE MODIFICATION WITH THE ARRPOW 
var magic = function () {
    return new Date();
};





// >> WRITE ARROW FUNCTIONS WITH PARAMETERS

// Just like normal functions you can pass arguments to an ARROW FUNCTION
// for good measures/practice we change var to const
// 


const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// function before modification with arrow above
const myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));




// >> WRITE HIGHER ORDER ARROW FUNCTIONS 1


// Arrow functions work really well with higher order functions
// Such as ( map,filter and reduce ) "they take functions as arguments
// for processing collections of data"
// whenever one functions takes another function as an argument
// thats a good time for an arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// we are going to compute the square with only positive numbers
// in the array  above and we are gonna filter out anything thats not a 
// positive integer we are gonna us ethe filter and map function 
// to do that 
const squareList = (arr) => {
    // before now we passed in arguments in parenthesis for an
    // arrow function but if you only have one arg like num bellow
    // you dont need parenthesis you can just put argument and 
    // then the arrow then we see whats returned from the arrow function 
    // SO basically from "num > 0" the result of this array is all numbers 
    // that are more than 0 and also integers after we get that we wanna
    // get the squares of each array 
    // the map function takes the function as its arguments instead
    // of writing a full function we are gonna pass in an arrow function
    // x just means every element from the ARRAY thats been passed
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// ABOVE FUNCTION before modification 
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr;
//     return squaredIntegers;
// };


// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);





// >> USE THE REST OPERATOR WITH FUNCTION PARAMETERS

// The rest operator(...)three dots allows you to create
// a function that takes a variable/multiple number of arguments 

const sum = (function () {
    // with the rest operator it will convert 
    // everything in the array and put 
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
// we can now add any number of arguments 1,2,3,5,5,6,7,8
console.log(sum(1, 2, 3, 4));

// function before using the rest operator
// const sum = (function() {
//     return function sum(x, y, z) {
//         const args = [ x, y, z ];
//         return args.reduce((a,b) => a + b, 0);
//     };
// })();

// console.log(sum(1, 2, 3));

// >> WRITE HIGHER ORDER ARROW FUNCTIONS 2  (2:53:00)

// in order to create more flexible function you can use default
// parameters

const increment = (function () {
    return function increment(number, value) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));



//>> USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE

// The SPREAD operator  looks just the REST operator ... but 
// it expands an already existing array or it spreads out
// an array
// you can only use it in an argument or in an array literal
// so it takes an array and spread it out into its individual 
// parts


const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

let arr2;
(function () {
    // we set arr2 to equal arr1 they are thesame thing
    // index[0] will log out FRANCIS even thou we are logging
    // out arr2, BUT when we want arr2 to be a copy of arr1 thats
    // when the SPREAD operator comes in wee put them inside 
    // brackets [... arr1] which is an array it will spread out the 
    // contents of array 1 so when we log ou it says "JAN" at index [0]
    // instaed of "FRANCIS"
    arr2 = [...arr1];
    arr1[0] = "FRANCIS"
})();

console.log(arr2);

// clean function before the rest operator

// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

// let arr2;
// (function () {
//     arr2 = arr1;
//     arr1[0] = "FRANCIS"
// })();

// console.log(arr2);




// >> DESTRUCTURING ASSIGNMENTS
// USE DESTRUCTURING ASSIGNMENTS TO ASSIGN VARIABLES FROM OBJECTS


var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// if we wanna take each individual element of this variable and
// assign it to an element this is the old way of doing it bellow 

var x = voxel.x; //x = 3.6
var y = voxel.y; //x = 7.4
var z = voxel.z; //z = 6.54

// as seen below this is the easier and quicker way to assign 
// to each element in an object into variables
// so eg {x : a} means get the field of "x" copy into value "a"

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54

// below we are gonna use destructuring to obtain the 
// average temperature of tommorow 
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTommorow(avgTemperatures) {
    "use strict";
    // DESTRUCTURING 
    // So the code below basically means we get the "tomorrow" field 
    // from the "avgTemperatures" object and assign it to the "tempOfTommorow"
    // variable

    const { tomorrow: tempOfTommorow } = avgTemperatures;
    return tempOfTommorow;
}

console.log(getTempOfTommorow(AVG_TEMPERATURES)); // log out should be 79

// CLEAN CODE NO COMMENTS BEFORE MODIFICATION


// var voxel = {x: 3.6, y: 7.4, z: 6.54};

// var x = voxel.x; //x = 3.6
// var y = voxel.y; //x = 7.4
// var z = voxel.z; //z = 6.54

// const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54



// const AVG_TEMPERATURES = {
//     today : 77.5,
//     tommorrow: 79
// };

// function getTempOfTommorow(avgTemperatures) {
//     "use strict";

//     const getTempOfTommorow = undefined;
//     return tempOfTommorow;
// };

// console.log(getTempOfTomorrow(AVG_TEMPERATURES));





// >> DESTRUCTURING ASSIGNMENTS WITH NESTED OBJECTS

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 34.4, max: 94.8 }
};

function getMaxOfTomorrow(forecast) {
    "use strict";
    // we are gonna go inside the tomorrow object we need the "max" 
    // we are using the double curly braces because the object
    // above is nested and weve destructured 2 times the variable now
    // is maxOfTomorrow we set the "max" that was inside "tomorow"
    // above to " maxOfTomorrow"

    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
};

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

// CLEAN CODE
// const LOCAL_FORECAST  = {
//     today: {min:72, max: 83},
//     tomorrow: {min: 34.4, max:54.8 }
// };

// function getMaxOfTomorrow(forecast) {
//     "use strict";

//     const {tomorrow: {max: maxOfTomorrow}} = forecast;
//     return maxOfTomorrow;
// };

// console.log(getMaxOfTomorrow(LOCAL_FORECAST));




// >> we can also use destructuring of arrays to switch the 
// places of variables


let a = 8, b = 6;

(() => {
    "use strict";
    [a, b] = [b, a]
})();

console.log(a);
console.log(b);

// >> USE DESTRUCTURING ASSIGNMENTS TO ASSIGN VARIABLES FROM ARRAYS


// bellow theres an array assigned to variable [z, y] to the
// first two numbers of the array, the difference between 
// destructuring from arrays and destructuring from objects
// you cannot specify which element in an array to go into a
// variable it just goes in order 
const [z, a, , , y] = [1, 2, 3, 4, 5, 6];
console.log(z, a, y); // should log out 1 2 5  


// >>  USE DESTRUCTURING ASSIGNMENT WITH REST... OPERATOR 
// to reassign array elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // , , the comas removes the first two items of the array 
    // so what "const [ , , ...arr] = list;" means is do nothing
    // for the first element, do nothing for the second element
    // then "...arr" everything else put into the arr variable
    const [, , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);



// >> Using Destructuring Arrays to pass an Object as a Functions Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 45.6,
    mode: 4767.22,
    min: -0.75,
    average: 35.85
};

const half = (function () {
    // passed in the max and min parameters straight into the function
    // 
    return function half({ max, min }) {
        // stats.max + stats.min is another way to go
        // but this shorter and the methodbellow is commonly used 
        // with api calls when you are getting information from an 
        // ajex request or an api request it will often have allot
        // more information than what you need 
        return (max + min) / 2.0;
    };

})();
// stats is being called here an its passing out the whole stats
// object
console.log(stats);
console.log(half(stats));



// >> Creating Strings Using Template Literals

const person = {
    name: "Zodiac Francis",
    age: 24
};

// template literals makes making complex strings 
// easier you make template literals with backtext "`"
// the advantages of template literals is you can make multi-line strings
// you can put variables right in the string, you can also
// add double or single quotation marks without having to escape them
// escape them ]."${person.name}!" when we see the dollar
// sign it means anything in the bracket is javascript
//  

const greeting = `Hello my name is ${person.name}!
I am ${person.age} years old.`; // logged out as new line 

console.log(greeting);


const result = {
    success: ["max-lenght", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on--top", "line-break"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = null;

    return resultDisplayArray;
}





// >> WRITE CONCISE(short) OBJECT LITERAL DECLARATIONS
// USING SIMPLE FIELDS

// ES6 added nice support for easily defining object literals

const createPerson = (name, age, gender) => ({ name, age, gender });


console.log(createPerson("franco francis", 56, "male"));




// >> WRITING CONSISE DECLARATIVE FUNCTIONS

const bicycle = {
    gear: 2,
    // a function is being declared below its a new way
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);




// >> USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION 

// you can define an object using the class keyword
// constructor function "spaceShuttle" the CLASS keyword
// replaces the constructor function creation 
// we set targetPlanet to this.targetPlanet;
// we create anew object outside the function with the
// var keyword that allows us to log out (zeus.targetPlanet)

class spaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new spaceShuttle('Jupiter');

console.log(zeus.targetPlanet);


// old way to write function above
var spaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}


// >> EXAMPLE OF A CONSTRUCTOR FUNCTION

function makeClass() {
    class Vegetable {
        // 4* carrot from 3* bellow will be set to (name)
        constructor(name) {
            this.name = name;
        }
    }
    // 2* which will return a class vegetable from
    // from function above
    return Vegetable;
}
// 1* we set vegetable bellow to makeClass();
const Vegetable = makeClass();
// 3* and when we do new Vegetable and pass in carrot
const carrot = new Vegetable("carrot");
// 5* when we log out it should return carrot
console.log(carrot.name);






// constructor FUNCTION WITHOUT COMMENTS
// function makeClass() {
//     class Vegetable{
//         constructor(name){
//             this.name = name;
//         }
//     }
//     return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable("carrot");
// console.log(carrot.name);




// >> Use getters and setters to control access to an o


// >> UNDERSTANDING THE DIFFERENCE BETWEEN import and require
// in the past people use the "require" keyword to import 
// we now have import and export to help us do that
// to be able to use the import function we must had 
// the function in another file so we import from here 


import { capitalizeString } from "./string_funtion"
const cap = capitalizeString("helloo");

console.log(cap);
// Note** this below is a copy of code in the export file
// this  is avariable thats set to  a function to return the
// ".toUpperCase()" which is a js function that turns 
// a string to uppercase, this function is being imported 
// from the other file 

export const capitalizeString = str => str.toUpperCase();



// >> USE EXPORT TO REUSE A CODE BLOCK

// We export function and variables from one file so we 
// can import them into another file thats how we can
// reuse different code.
// function below capitalizes the first letter of 
// of the string and leave the rest in lower case
const capitalizeString = (string) => {
    return string.chartAt(0).toUpperCase() + string.slide(1);
}

// so in this file we are exporting this function and
// the variable so we can import them into another file
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";



//>> USE * TO IMPORT EVERYTHING FROM A FILE

// when a file export multiple different thing you can 
// import everything individually or you can export
// everything 

// capitalizeString can be anything it can be an object 
// you create  then the directory or the file name in 
// quotation             
import * as capitalizeStrings from "capitalize_string"; // import everything from a file 


// >> CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT

// a fallback export is a fallback is only used if
// you want to export one thing from a file  
// default is basically the fallback telling us that
// this is the one thin we are gonna export
// from this file
export default function subtract(x, y) { return x - y };


// >> IMPORT A DEFAULT EXPORT

// its like the later but theres a slight difference
// if its not a default export you put curly braces around
// it.

import subtract from "math_functions";

// lets pretend we have a math function that has a default
// function name subtract 
subtract(7, 4);



