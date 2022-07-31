import { Box } from "./box";
import { BoxCategory } from "./enums";
import { printOrderSummary, Order, getCostOfOrder } from "./order";

// Test inputs 
let testSizesOne = [5, 3, 2]; // small 
let testWeightOne = 1; 
let testSizesTwo = [12, 8, 5]; // medium
let testWeightTwo = 2
let testSizesThree = [51, 2, 3]; // large
let testWeightThree = 10; // Overweight box
let testSizesFour = [5, 2, 3];
let testWeightFour = 25; // Heavy box
let testSizesFive = [4, 3, 1];
let testWeightFive = 1;


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

if (orderTwo.costOfOrder != 34) {
    console.log("Incorrect price estimation: value should be 34 but value returned was " + orderTwo.costOfOrder);
}

printOrderSummary(orderTwo);

// Test Case 3
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

// Test Case 4
console.log("\nTEST CASE 4\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\tDimensions of box 4: " + testSizesFour + " and weight is " + testWeightFour);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let boxListFour: Box[] = [...boxListTwo, new Box(testSizesFour, testWeightFour)];


let orderFour = new Order(boxListFour, true);
getCostOfOrder(orderFour);

if (orderFour.costOfOrder != 168) {
    console.log("Incorrect price estimation: value should be 168 but value returned was " + orderFour.costOfOrder);
}

printOrderSummary(orderFour);


// Test Case 5
console.log("\nTEST CASE 5\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\tDimensions of box 4: " + testSizesFour + " and weight is " + testWeightFour);
console.log("\tDimensions of box 5: " + testSizesFive + " and weight is " + testWeightFive);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let boxListFive: Box[] = [...boxListFour, new Box(testSizesFive, testWeightFive)]


let orderFive = new Order(boxListFive, true);
getCostOfOrder(orderFive);

if (orderFive.costOfOrder != 168) {
    console.log("Incorrect price estimation: value should be 168 but value returned was " + orderFive.costOfOrder);
}

printOrderSummary(orderFive);

// Test case 6

// resetting test cases to get two discounts
testSizesOne = [5, 3, 2]; // small 
testWeightOne = 1;
testSizesTwo = [5, 8, 5]; // small
testWeightTwo = 2
testSizesThree = [1, 2, 3]; // small
testWeightThree = 10; // Overweight box
testSizesFour = [5, 2, 3]; // small
testWeightFour = 12; // Heavy box
testSizesFive = [40, 3, 1]; // everything below is mixed
testWeightFive = 1;
let testSizesSix = [100, 3, 1];
let testWeightSix = 1;
let testSizesSeven = [1, 3, 1];
let testWeightSeven = 1;
let testSizesEight = [40, 3, 1];
let testWeightEight = 1;
let testSizesNine = [120, 3, 1];
let testWeightNine = 1;


console.log("\nTEST CASE 6\n")
console.log("Inputs");
console.log("\tDimensions of box 1: " + testSizesOne + " and weight is " + testWeightOne);
console.log("\tDimensions of box 2: " + testSizesTwo + " and weight is " + testWeightTwo);
console.log("\tDimensions of box 3: " + testSizesThree + " and weight is " + testWeightThree);
console.log("\tDimensions of box 4: " + testSizesFour + " and weight is " + testWeightFour);
console.log("\tDimensions of box 5: " + testSizesFive + " and weight is " + testWeightFive);
console.log("\tDimensions of box 6: " + testSizesSix + " and weight is " + testWeightSix);
console.log("\tDimensions of box 7: " + testSizesSeven + " and weight is " + testWeightSeven);
console.log("\tDimensions of box 8: " + testSizesEight + " and weight is " + testWeightEight);
console.log("\tDimensions of box 9: " + testSizesNine + " and weight is " + testWeightNine);
console.log("\tSpeedy Shipping selected!");
console.log("\n");

let boxListSix: Box[] = [
    new Box(testSizesOne, testWeightOne),
    new Box(testSizesTwo, testWeightTwo),
    new Box(testSizesThree, testWeightThree),
    new Box(testSizesFour, testWeightFour),
    new Box(testSizesFive, testWeightFive),
    new Box(testSizesSix, testWeightSix),
    new Box(testSizesSeven, testWeightSeven),
    new Box(testSizesEight, testWeightEight),
    new Box(testSizesNine, testWeightNine),
    ];


let orderSix = new Order(boxListSix, true);
getCostOfOrder(orderSix);

if (orderSix.costOfOrder != 234) {
    console.log("Incorrect price estimation: value should be 234 but value returned was " + orderSix.costOfOrder);
}

printOrderSummary(orderSix);

