import { SizeCategory, SizeDimensions, SizePrice } from "./enums";

// Class for Boxes
export class Box {
    sizeCategory ?: SizeCategory;
    dimensions: number[];
    cost ?: number;

    // In constructor, determine and assign sizeCategory and cost
    constructor(dim: number[]) {
        this.dimensions = dim;
        this.getBoxSizeCategoryAndPrice();
    }

    getBoxSizeCategoryAndPrice() {
        let largestSize = Math.max(...this.dimensions);
        if (largestSize < SizeDimensions.small) {
            this.sizeCategory = SizeCategory.Small;
            this.cost = SizePrice.small;
        }
        else if (largestSize < SizeDimensions.medium) {
            this.sizeCategory = SizeCategory.Medium;
            this.cost = SizePrice.medium;
        }
        else if (largestSize < SizeDimensions.large) {
            this.sizeCategory = SizeCategory.Large;
            this.cost = SizePrice.large;
        }
        else {
            this.sizeCategory = SizeCategory.XL;
            this.cost = SizePrice.XL;
        }
    }
}