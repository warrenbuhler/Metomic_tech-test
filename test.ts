/**
 * THIS IS GENERATED CODE. Quality unknown.
 *
 * GPT-3 input:
 *   "Generate a typescript file that solves tech test './README.md'"
 *
 *  GPT-3 output: wat. I tried.
 */

type Box = {
  size: 'medium' | 'small'
  dimensions: number[]
  cost?: number
  discount?: number
}

function getCostOfBox(box:Box): number{
  return box.size === "small" ? 3 : 5
}

function calculateCosts(boxes:Box[]) {
  const boxesWithCosts = boxes.map(box => {
    return {
      ...box,
      cost: getCostOfBox(box)
    }
  })

  return {
    total: boxesWithCosts.reduce((a,b) => a+b.cost, 0),
    lineItems: boxesWithCosts
  }
}


const inputs : Box[] = [{ size: 'small', dimensions: [5,3,2] }, {size: 'medium', dimensions: [12,8,5]}]
console.log("Cost of boxes:")
console.log(calculateCosts(inputs))