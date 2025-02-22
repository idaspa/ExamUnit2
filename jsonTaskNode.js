// impoterte json fila så jeg kunne teste
const fetchJson = require("./example_files/nodes.json")

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