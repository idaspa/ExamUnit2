// impoterte json filene så jeg kunne teste
const fetchJson = require("./example_files/nodes.json")
const fetcharray = require("./example_files/arrays.json")


// Task 2. Flatten those numbers.
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
console.log(flatten(fetcharray))



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