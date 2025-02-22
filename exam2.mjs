//import { isNotANumber } from "./testing.mjs";

// Task 

// function that returns the square of a number
function squareOfNumber(number) {
    if (typeof number == "number") {
        return number * number;
    } else {
        return NaN;
    }
}
console.log(squareOfNumber(7))


// function that returns a length in mm assuming it has been given a length in inches. 
function fromInchesToMm(number) {
    const one_Inch_In_Mm = 25.4;
    if (typeof number == "number") {
        return number * one_Inch_In_Mm;
    } else {
        return NaN;
    }
}
console.log(fromInchesToMm(5));


// a function that returns the root of a number
function rootOfNumber(number) {
    if (typeof number == "number") {
        return number ** 0.5
    } else {
        return NaN;
    }
}
console.log(rootOfNumber(64))

// a function that returns the cube of a number
function cubeOfNumber(number) {
    if (typeof number == "number") {
        return number * number * number
    } else {
        return NaN;
    }
}
console.log(cubeOfNumber(4))


// A function that returns the area of a cirkle given radius.
function areaOfCirkle(r) {
    const PI = 3.14;
    return (PI * r * r);
}
console.log(areaOfCirkle(10))

// function that returns a greeting, given a name. 
function greet(name) {
    let greeting = name + " Error, The Code you are trying to write has too many Syntax Errors, please try again later. ";
    if (typeof name == "string") {
        return greeting;
    } else {
        return "Not a string"
    }
}
console.log(greet("TONY/CHRISTIAN!"));
/*
isNotANumber(fromInchesToMm("S"), "BC s not number");
isNotANumber(rootOfNumber([4]), "not a number");
isNotANumber(squareOfNumber(NaN), "NOT A NUMBER");
*/



// Task 2. Flatten those numbers.
let array = [
    435,
    2028,
    [
        [
            3047, 4910, 8146,
            7999, 1433, 7211,
            1197, 6002
        ],
        2821,
        3508
    ]
]

function flatten(array) {
    const newList = [];

    for (let i = 0; i < array.length; i++) {
        const numberElement = array[i];
        if (typeof numberElement === "number") {
            newList.push(numberElement);
        } else if (Array.isArray(numberElement)) {
            const nyeTall = flatten(numberElement);
            newList.push(...nyeTall);
        }
    }

    return newList
}
console.log(flatten(array));

// Task 3 in new file { jsonTaskNode.js } beacuse require did not work in mjs...



