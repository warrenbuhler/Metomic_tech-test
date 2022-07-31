# Little boxes on the hillside
_Medium and large ones too._

You work for a courier company. They've just discovered you can code and now corporate's gone afuzz with demands to save their failing cost-calculation department who keep accidentally sending parcels to customers for negative money.

You've thus been tasked with creating a code library ... to calculate the cost of sending an order of parcels. 

 - You may approach this in the language you feel most comfortable using.  
 - The API for the library **should be programmatic**. There is no need to implement a CLI, HTTP, or any other transport layer. 
 - Try not to peek ahead at future steps and commit your work as you go.  
 - **Input** can be in any form you choose.  
 - **Output** should be a collection of items with their individual cost and type, as well as total cost.  
 - In all circumstances the **cheapest option** for sending **each parcel** should be selected. 

Take **no longer** than 2 hours! Do what you can and give us **a rough outline** of what further changes you might consider making.  


### Tips!  
 - Apply good software design principles (no surprises here)
 - Let the structure of your design evolve as you encounter new requirements.
 - Start simple. For instance, you might start with a test that if a 1cmx1cmx1cm size parcel, the result should be: `Small Parcel: £3. Total Cost: £3`  
- We'd like to see your thought process as it evolves. Either commit as you go, or if you'd prefer: simply leave a comment to explain what's happened when your approach changes. 

### Expected deliverable
A repository/zip file containing: 
- your code in your choice of language
- an instruction telling us how to run it (e.g. `node ./src/index.js` or `python CourierKata.py`)

### Choice of language
**If you know Typescript:**
We use Typescript extensively at Metomic. If you know Typescript and are comfortable with the language, we strongly encourage you to submit your solution in Typescript as we'd like to see what you've learnt in the language.

**If you do not know Typescript**
We are looking for good engineers - language is just a tool. Use any language you feel most comfortable with that best suits the problem. 

### Sample code
In the case that you do know typescript, we have included some sample code to get you started. Feel free to do with this code whatever you like - use it, change it, throw it away and start again... It was written by the failing cost-calculation department before they admitted using GPT-3 to generate it and we're not sure if it's any good.


## Ok let's go!
Let's get started with the first requirement:
#### Phase 1
> Remember: Your goal is to create a library that can calculate the cost of a set of parcels

The initial implementation just needs to take into account a parcel's size. For each size type there is a fixed delivery cost
- Small parcel: all dimensions < 10cm. Cost £3  
- Medium parcel: all dimensions < 50cm. Cost £8  
- Large parcel: all dimensions < 100cm. Cost £15  
- XL parcel: any dimension >= 100cm. Cost £25  

> Remember: A successful output at this point tells us:
> - how much it costs in total for a set of parcels to be sent
> - how much each parcel cost

#### Phase 2
Thanks to logistics improvements we can deliver parcels faster. This means we can charge more money. `Speedy shipping` can be selected by the user to take advantage of our improvements.
 - This doubles the cost of the entire order
 - Speedy shipping **should be listed as a separate item in the output**, with its associated cost
 - Speedy shipping should not impact the price of individual parcels, i.e. their individual cost should remain the same as it was before

#### Phase 3
There have been complaints from delivery drivers that people are taking advantage of our dimension only shipping costs. A new weight limit has been added for each parcel type, over which a charge per kg of weight applies:

**+£2/kg over weight limit for parcel size:**  
- Small parcel: 1kg  
- Medium parcel: 3kg  
- Large parcel: 6kg  
- XL parcel: 10kg  

#### Phase 4
Some of the extra weight charges for certain goods were excessive. A new parcel type has been added to try and address overweight parcels:

**Heavy parcel (limit 50kg), £50. +£1/kg over**

#### Phase 5
In order to award those who send multiple parcels, special discounts have been introduced.
- Small parcel mania! Every **4th small parcel** in an order is free!  
- Medium parcel mania! Every **3rd medium parcel** in an order is free!  
- Mixed parcel mania! Every **5th parcel** in an order is free!  
- Each parcel can only be used in a discount once
- Within each discount, **the cheapest parcel is the free one**
- The combination of discounts which saves the most money should be selected every time  


**Example:**
 - 6x medium parcel
	 - 3 at £8
	 - 3 at £10 (overweight)
1st discount should include all 3 £8 parcels and save £8. 
2nd discount should include all 3 £10 parcels and save £10.


- Just like speedy shipping, discounts should be listed as a separate item in the output, with associated saving, e.g. "-2"  
- Discounts should not impact the price of individual parcels, i.e. their individual cost should remain the same as it was before  
- Speedy shipping applies after discounts are taken into account


### End
Whew! 
