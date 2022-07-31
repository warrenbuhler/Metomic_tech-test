import { Box } from "./box";
import { SpeedyShippingModifier } from "./consts";
import { BoxCategory, DiscountType } from "./enums";


// Used to define the order in question

interface IDiscounts
{
    discountType: DiscountType;
    savings: number;
}

export class Order {
    boxList: Box[];
    costOfBoxes: number = 0;
    costOfOrder: number = 0;
    totalDiscountSavings: number = 0;
    speedyShipping: boolean;
    discounts: IDiscounts[];

    // constructor
    constructor(boxes: Box[], speedyShipping: boolean) {
        this.boxList = boxes;
        this.speedyShipping = speedyShipping;
        this.discounts = [];
    }
}

// get the Total Cost of the boxes in this order
function getCostOfBoxes(order: Order) {
    order.boxList.forEach((box) => {
        order.costOfBoxes += box.cost!
    })
}

// Get the largest discount
function getDiscounts(order: Order) {
    // keeping track of which boxes are being tracked for discounts
    let mixedPackageDiscount: Box[] = order.boxList.filter((a) => a.boxCategory != BoxCategory.Small && a.boxCategory != BoxCategory.Medium);
    let smallPackageDiscount: Box[] = order.boxList.filter((a) => a.boxCategory == BoxCategory.Small).sort((a, b) => b.cost! - a.cost!);
    let mediumPackageDiscount: Box[] = order.boxList.filter((a) => a.boxCategory == BoxCategory.Medium).sort((a,b) => b.cost! - a.cost!);

    // Check the small package discounts possible
    let start = 0;
    for (let i = 0; i < smallPackageDiscount.length; i++) {
        if ((i - start) == 3) {
            order.discounts.push({
                discountType: DiscountType.SmallDiscount,
                savings: smallPackageDiscount[i].cost!
            });
            start = i + 1;
        }
    }
    mixedPackageDiscount = mixedPackageDiscount.concat(smallPackageDiscount.slice(start));

    // check medium package discounts possible
    start = 0
    for (let i = 0; i < mediumPackageDiscount.length; i++) {
        if ((i - start) == 2) {
            order.discounts.push({
                discountType: DiscountType.MediumDiscount,
                savings: mediumPackageDiscount[i].cost!
            });
            start = i + 1;
        }
    }
    mixedPackageDiscount = mixedPackageDiscount.concat(mediumPackageDiscount.slice(start));


    // Sort then get the most out of the mixed package set
    mixedPackageDiscount.sort((a, b) => b.cost! - a.cost!);
    console.log(mixedPackageDiscount);
    start = 0
    for (let i = 0; i < mixedPackageDiscount.length; i++) {
        if ((i - start) == 4) {
            order.discounts.push({
                discountType: DiscountType.MixedDiscount,
                savings: mixedPackageDiscount[i].cost!
            });
            start = i + 1;
        }
    }

    order.totalDiscountSavings = order.discounts.reduce((sum, current) => sum + current.savings, 0);
}


// Get the total cost of the Order
export function getCostOfOrder(order: Order) {
    getCostOfBoxes(order);
    getDiscounts(order);

    // Apply speeding shipping modifier if neccessary, multiple order by 2 
    if (order.speedyShipping) {
        order.costOfOrder = (order.costOfBoxes - order.totalDiscountSavings) * SpeedyShippingModifier;
    }
    else {
        order.costOfOrder = order.costOfBoxes - order.totalDiscountSavings;
    }
}


// Function to print out the summary of the Order
export function printOrderSummary(order: Order) {
    console.log("ORDER SUMMARY")
    console.log("\tTotal Order Price is " + order.costOfOrder + " pounds");
    console.log("\tPricing Breakdown:")
    let num = 1;
    order.boxList.forEach((box) => {
        console.log("\t\tBox " + num + " is a " + BoxCategory[box.boxCategory!] + " box with weight of " + box.weight + "kg and costs " + box.cost + " pounds");
        num++;
    })

    if (order.discounts.length > 0) {
        console.log("\tDiscount Pricing")
        order.discounts.forEach((discount) => {
            console.log("\t\tThe " + DiscountType[discount.discountType!] + " saves you " + discount.savings + " pounds");
        })
    }

    if (order.speedyShipping) {
        console.log("\tAddon Pricing");
        console.log("\t\tSpeedy Shipping charge is " + (order.costOfBoxes - order.totalDiscountSavings) + " pounds")
    }
    else {
        console.log("\tConsider selecting our Speedy Shipping Option to speed up your deliveries!");
    }
}

