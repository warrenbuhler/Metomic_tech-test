import { Box } from "./box";
import { SizeCategory } from "./enums";

const SpeedyShippingModifier = 2;

// Used to define the order in question
export class Order {
    boxList: Box[];
    costOfBoxes: number = 0;
    costOfOrder: number = 0;
    speedyShipping: boolean;

    // constructor
    constructor(boxes: Box[], speedyShipping: boolean) {
        this.boxList = boxes;
        this.speedyShipping = speedyShipping;
    }
}

// get the Total Cost for this Order
function getCostOfBoxes(order: Order) {
    order.boxList.forEach((box) => {
        order.costOfBoxes += box.cost!
    })
}

export function getCostOfOrder(order: Order) {
    getCostOfBoxes(order);

    // Apply speeding shipping modifier if neccessary, multiple order by 2 
    if (order.speedyShipping) {
        order.costOfOrder = order.costOfBoxes * SpeedyShippingModifier;
    }
    else {
        order.costOfOrder = order.costOfBoxes;
    }
}


// Function to print out the summary of the Order
export function printOrderSummary(order: Order) {
    console.log("ORDER SUMMARY")
    console.log("\tTotal Order Price is " + order.costOfOrder + " pounds");
    console.log("\tPricing Breakdown:")
    let num = 1;
    order.boxList.forEach((box) => {
        console.log("\t\tBox " + num + " is a " + SizeCategory[box.sizeCategory!] + " box and costs " + box.cost + " pounds");
        num++;
    })

    if (order.speedyShipping) {
        console.log("\t\tSpeedy Shipping charge is " + order.costOfBoxes + " pounds")
    }
    else {
        console.log("\tConsider selecting our Speedy Shipping Option to speed up your deliveries!");
    }
}

