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
    let mixedPackageDiscount: Box[] = [];
    let smallPackageDiscount: Box[] = [];
    let mediumPackageDiscount: Box[] = [];

    // Loop through every box to figure out the discounts
    for (let i = 0; i < order.boxList.length; i++) {
        // Add this box to the correct categories

        mixedPackageDiscount.push(order.boxList[i]);
        if (order.boxList[i].boxCategory == BoxCategory.Small) {
            smallPackageDiscount.push(order.boxList[i]);
        }
        if (order.boxList[i].boxCategory == BoxCategory.Medium) {
            mediumPackageDiscount.push(order.boxList[i]);
        }

        // If there are four small packages, you are eligible for a discount
        if (smallPackageDiscount.length == 4) {
            order.discounts.push({
                discountType: DiscountType.SmallDiscount,
                savings: smallPackageDiscount.reduce(function (prev, curr) {
                    return prev.cost! < curr.cost! ? prev : curr;
                }).cost!
            });
            // remove all packages from being considered for future discounts
            mixedPackageDiscount = mixedPackageDiscount.filter(a => !smallPackageDiscount.includes(a));
            smallPackageDiscount = []
        }

        // If there are 3 medium  packages you are eligible for a discount
        if (mediumPackageDiscount.length == 3) {
            order.discounts.push({
                discountType: DiscountType.MediumDiscount,
                savings: mediumPackageDiscount.reduce(function (prev, curr) {
                    return prev.cost! < curr.cost! ? prev : curr;
                }).cost!
            });
            // remove all packages from being considered for future discounts
            mixedPackageDiscount = mixedPackageDiscount.filter(a => !mediumPackageDiscount.includes(a));
            mediumPackageDiscount = []
        }

        if (mixedPackageDiscount.length == 5) {
            order.discounts.push({
                discountType: DiscountType.MixedDiscount,
                savings: mixedPackageDiscount.reduce(function (prev, curr) {
                    return prev.cost! < curr.cost! ? prev : curr;
                }).cost!
            });
            // remove all packages from being considered for future discounts
            smallPackageDiscount = [];
            mediumPackageDiscount = [];
            mixedPackageDiscount = [];
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

