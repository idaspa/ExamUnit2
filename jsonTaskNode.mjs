// impoterte json filene så jeg kunne teste
import fs from 'fs';

const fetchJson = JSON.parse(fs.readFileSync("./example_files/nodes.json"))
const fetcharray = JSON.parse(fs.readFileSync("./example_files/arrays.json"))
const fetchBook = JSON.parse(fs.readFileSync("./example_files/books.json"));
// Task 2. Flatten those numbers.


function flatten(array) {
    const newList = [];

    for (let i = 0; i < array.length; i++) {
        const numberElement = array[i];
        if (typeof numberElement === "number") {
            newList.push(numberElement);
        } else if (Array.isArray(numberElement)) {
            const newNumber = flatten(numberElement);
            newList.push(...newNumber);
        }
    }
    return newList;
}
console.log(flatten(fetcharray))


// Task 3. 

// calculating sum of structure. 
function sum(values) {
    if (values === null) {
        return 0;
    }

    return sum(values.left) + sum(values.right) + values.value;
}
console.log(sum(fetchJson))


// deepest level of structure. 
function depthOf(node) {
    if (node === null) {
        return 0;
    }

    let lefty = depthOf(node.left);
    let rigthy = depthOf(node.right);
    let deepestDepth = Math.max(lefty, rigthy)
    return deepestDepth + 1;
}
console.log(depthOf(fetchJson))


// Numbers of the nodes.
function numberOfNodes(node) {
    if (node === null) {
        return 0;
    }

    let leftNodeCount = numberOfNodes(node.left);
    let rightNodeCount = numberOfNodes(node.right);
    let leftAndRight = leftNodeCount + rightNodeCount;
    return leftAndRight + 1;
}
console.log(numberOfNodes(fetchJson))


// Task 4. 
// Returning books starting with the word "The"

function searchWord(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.substring(0, 3) === "The") {
            result.push(books[i]);
        }
    }
    return result;
}
console.log(searchWord(fetchBook))




//books alphabetical order and 
function sortBooks(books) {
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books.length + i + 1; j++) {
            return books.sort(books.title)
        }
    }
};
//console.log(sortBooks(fetchBook))


//Return only books written by authors with a `t` in their name

function findLetter(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        let author = books[i].author;
        for (let j = 0; j < author.length; j++) {
            if (author[j] === "t" || author[j] === "T") {
                result.push(books[i])
                break;
            }
        }
    }
    return result;
}
console.log(findLetter(fetchBook))