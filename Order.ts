import { Box } from "./box";
import { SizeCategory } from "./enums";


// Used to define the order in question
export class Order {
    boxList: Box[];
    totalCost: number = 0;

    // constructor
    constructor(boxes: Box[]) {
        this.boxList = boxes;
    }
}

// get the Total Cost for this Order
export function getTotalCost(order: Order) {
    order.boxList.forEach((box) => {
        order.totalCost += box.cost!
    })
}


// Function to print out the summary of the Order
export function printOrderSummary(order: Order) {
    console.log("ORDER SUMMARY")
    console.log("\tTotal Order Price is " + order.totalCost + " pounds");
    console.log("\tPackage Breakdown:")
    let num = 1;
    order.boxList.forEach((box) => {
        console.log("\t\tBox " + num + " is a " + SizeCategory[box.sizeCategory!] + " box and costs " + box.cost + " pounds");
        num++;
    })
}

