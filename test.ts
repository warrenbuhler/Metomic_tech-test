import { Box } from "./box";
import { BoxCategory } from "./enums";
import { printOrderSummary, Order, getCostOfOrder } from "./order";

// Test inputs 
let testSizesOne = [5, 3, 2];
let testWeightOne = 1;
let testSizesTwo = [12, 8, 5];
let testWeightTwo = 2
let testSizesThree = [51, 2, 3];
let testWeightThree = 10; // Overweight box
let testSizesFour = [5, 2, 3];
let testWeightFour = 25; // Heavy box


// Test case 1
console.log("TEST CASE 1 - two normal boxes\n")

console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\n")

let boxListOne: Box[] = [new Box(testSizesOne, testWeightOne), new Box(testSizesTwo, testWeightTwo)];
if (boxListOne[0].boxCategory != 0) {
    console.log("Box size is incorrect. Box should be a Small box but is " + BoxCategory[boxListOne[0].boxCategory!]);
}

if (boxListOne[1].boxCategory != 1) {
    console.log("Box size is incorrect. Box should be a Medium box but is " + BoxCategory[boxListOne[1].boxCategory!]);
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
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\n")

let boxListTwo: Box[] = [new Box(testSizesOne, testWeightOne), new Box(testSizesTwo, testWeightTwo), new Box(testSizesThree, testWeightThree)];

if (boxListTwo[2].boxCategory != 2) {
    console.log("Box size is incorrect. Box should be a Large box but is " + BoxCategory[boxListOne[2].boxCategory!]);
}

let orderTwo = new Order(boxListTwo, false);
getCostOfOrder(orderTwo);

if (orderTwo.costOfOrder != 26) {
    console.log("Incorrect price estimation: value should be 26 but value returned was " + orderTwo.costOfOrder);
}

printOrderSummary(orderTwo);


console.log("\nTEST CASE 3\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let orderThree = new Order(boxListTwo, true);
getCostOfOrder(orderThree);

if (orderThree.costOfOrder != 68) {
    console.log("Incorrect price estimation: value should be 68 but value returned was " + orderThree.costOfOrder);
}

printOrderSummary(orderThree);


console.log("\nTEST CASE 3\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let boxListFour: Box[] = [new Box(testSizesOne, testWeightOne), new Box(testSizesTwo, testWeightTwo), new Box(testSizesThree, testWeightThree), new Box(testSizesFour, testWeightFour)];


let orderFour = new Order(boxListFour, true);
getCostOfOrder(orderFour);

if (orderFour.costOfOrder != 168) {
    console.log("Incorrect price estimation: value should be 168 but value returned was " + orderFour.costOfOrder);
}

printOrderSummary(orderFour);