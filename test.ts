import { Box } from "./box";
import { SizeCategory } from "./enums";
import { printOrderSummary, Order, getCostOfOrder } from "./order";

// Test inputs 
let testSizesOne = [5, 3, 2];
let testSizesTwo = [12, 8, 5];
let testSizesThree = [51, 2, 3];


// Test case 1
console.log("TEST CASE 1\n")

console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne);
console.log("\tDimensions of box 2: " + testSizesTwo);
console.log("\n")

let boxListOne: Box[] = [new Box(testSizesOne), new Box(testSizesTwo)];
if (boxListOne[0].sizeCategory != 0) {
    console.log("Box size is incorrect. Box should be a Small box but is " + SizeCategory[boxListOne[0].sizeCategory!]);
}

if (boxListOne[1].sizeCategory != 1) {
    console.log("Box size is incorrect. Box should be a Medium box but is " + SizeCategory[boxListOne[1].sizeCategory!]);
}

let orderOne = new Order(boxListOne, false);
getCostOfOrder(orderOne);

if (orderOne.costOfOrder != 11) {
    console.log("Incorrect price estimation: value should be 11 but value returned was " + orderOne.costOfOrder);
}

printOrderSummary(orderOne);


// Test Case 2 
console.log("\nTEST CASE 2\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne);
console.log("\tDimensions of box 2: " + testSizesTwo);
console.log("\tDimensions of box 3: " + testSizesThree);
console.log("\n")

let boxListTwo: Box[] = [new Box(testSizesOne), new Box(testSizesTwo), new Box(testSizesThree)];

if (boxListTwo[2].sizeCategory != 2) {
    console.log("Box size is incorrect. Box should be a Large box but is " + SizeCategory[boxListOne[2].sizeCategory!]);
}

let orderTwo = new Order(boxListTwo, false);
getCostOfOrder(orderTwo);

if (orderTwo.costOfOrder != 26) {
    console.log("Incorrect price estimation: value should be 26 but value returned was " + orderTwo.costOfOrder);
}

printOrderSummary(orderTwo);


console.log("\nTEST CASE 3\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne);
console.log("\tDimensions of box 2: " + testSizesTwo);
console.log("\tDimensions of box 3: " + testSizesThree);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let orderThree = new Order(boxListTwo, true);
getCostOfOrder(orderThree);

if (orderThree.costOfOrder != 52) {
    console.log("Incorrect price estimation: value should be 52 but value returned was " + orderThree.costOfOrder);
}

printOrderSummary(orderThree);