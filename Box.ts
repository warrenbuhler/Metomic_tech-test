import { SizeCategory, SizeDimensions, SizePrice, SizeWeight } from "./enums";
import { OverWeightModifier } from "./consts";

// Class for Boxes

export class Box {
    sizeCategory ?: SizeCategory;
    dimensions: number[];
    cost?: number;
    weight: number;

    // In constructor, determine and assign sizeCategory and cost
    constructor(dim: number[], weight: number) {
        this.dimensions = dim;
        this.weight = weight;
        this.getBoxSizeCategoryAndPrice();
    }

    getBoxSizeCategoryAndPrice() {
        let largestSize = Math.max(...this.dimensions);
        if (largestSize < SizeDimensions.small) {
            this.sizeCategory = SizeCategory.Small;
            this.cost = SizePrice.small;
            if (this.weight > SizeWeight.small) {
                this.cost += (this.weight - SizeWeight.small) * OverWeightModifier;
            }
        }
        else if (largestSize < SizeDimensions.medium) {
            this.sizeCategory = SizeCategory.Medium;
            this.cost = SizePrice.medium;
            if (this.weight > SizeWeight.medium) {
                this.cost += (this.weight - SizeWeight.medium) * OverWeightModifier;
            }
        }
        else if (largestSize < SizeDimensions.large) {
            this.sizeCategory = SizeCategory.Large;
            this.cost = SizePrice.large;
            if (this.weight > SizeWeight.large) {
                this.cost += (this.weight - SizeWeight.large) * OverWeightModifier;
            }
        }
        else {
            this.sizeCategory = SizeCategory.XL;
            this.cost = SizePrice.XL;
            if (this.weight > SizeWeight.small) {
                this.cost += (this.weight - SizeWeight.XL) * OverWeightModifier
            }
        }
    }
}