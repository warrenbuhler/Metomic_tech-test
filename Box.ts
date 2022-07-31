import { BoxCategory, SizeDimensions, SizePrice, SizeWeight } from "./enums";
import { HeavyOverWeightModifier, StandardOverWeightModifier } from "./consts";

// Class for Boxes
export class Box {
    boxCategory ?: BoxCategory;
    dimensions: number[];
    cost?: number;
    weight: number;

    // In constructor, determine and assign sizeCategory and cost
    constructor(dim: number[], weight: number) {
        this.dimensions = dim;
        this.weight = weight;
        this.getBoxCategoryAndPrice();
    }

    // Get the type of the box and the correct price
    getBoxCategoryAndPrice() {
        let largestSize = Math.max(...this.dimensions);
        if (largestSize < SizeDimensions.small) {
            this.boxCategory = BoxCategory.Small;
            this.cost = SizePrice.small;
            if (this.weight > SizeWeight.small) {
                this.cost += (this.weight - SizeWeight.small) * StandardOverWeightModifier;
            }
        }
        else if (largestSize < SizeDimensions.medium) {
            this.boxCategory = BoxCategory.Medium;
            this.cost = SizePrice.medium;
            if (this.weight > SizeWeight.medium) {
                this.cost += (this.weight - SizeWeight.medium) * StandardOverWeightModifier;
            }
        }
        else if (largestSize < SizeDimensions.large) {
            this.boxCategory = BoxCategory.Large;
            this.cost = SizePrice.large;
            if (this.weight > SizeWeight.large) {
                this.cost += (this.weight - SizeWeight.large) * StandardOverWeightModifier;
            }
        }
        else {
            this.boxCategory = BoxCategory.XL;
            this.cost = SizePrice.XL;
            if (this.weight > SizeWeight.small) {
                this.cost += (this.weight - SizeWeight.XL) * StandardOverWeightModifier
            }
        }

        // check if a box should instead be marked as a heavy box
        if (this.cost > (SizePrice.heavy + Math.max(0,(this.weight - SizeWeight.heavy) * HeavyOverWeightModifier))){
            this.boxCategory = BoxCategory.Heavy;
            this.cost = SizePrice.heavy + Math.max(0,(this.weight - SizeWeight.heavy) * HeavyOverWeightModifier);
        }
    }
}