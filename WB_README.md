# Warren ReadMe 

Instructions on how to run
ts-node ./test.ts


## Thoughts on introduction and phase 1: 

I want a series of constants defining concepts like small, large, and prices of each. These can be hardcoded for now, but in the future we'd want a user to be able to update them on the fly. 
I want class definitions for Order and Box. When you create a box with dimensions, we can calculate the size category and price

I checked FedEx's rate estimation page and they prompt for dimensions and weight of box. They don't ask for the user to pick a size category (ie small / medium).
I imagine that is to avoid users attempting to cheat the system with incorrect inputs. We should also only take the dimensions as input. 

I want a seperate function that runs over an order and prints out the correct info (total cost and price per box)

Calculating the price of the order should be a seperate function. The order might change repeatedly and could be called with each new box added or when a box is removed.

Example output
	Total Order Price is ## pounds: 

	Package breakdown:
		Box [#] is a [size] box and costs [cost] pounds
		Box [#] is a [size] box and costs [cost] pounds


## Thoughts phase 2:
Speedy shipping should be defined and stored on the Order class. 
Order should have a total price of all boxes stored. Then another price second price given addons or discounts

For reporting purposes, I like storing the cost of the boxes at the moment in the Order object and then seperately storing the final price of the Order. 
There is an arguement for storing the Speedy Shipping multiplier on the Order as well. Or alternatively, a  generic seperate "costOfAddons" property. This could help with future reporting and statistical analysis on the most profitable addons, however that is outside the scope and timeframe for this assignment.


## Thoughts on phase 3:
Boxes now need to be created with an additional parameter for weight. The weight will factor into the cost of that box.
Should store weight limits in my enums file.
Moving SpeedyShipping Modifier and OverWeightModifier into a consts file. In future iterations, you may wish to have the ability to change these on the fly (like during a special sale). In that case, you could have a private backing variable and allow only certain users to change it on the fly via an API call.

## Thoughts on phase 4
The name of "Heavy" doesn't fit exactly as a category in the enum named SizeCategory. I can modify that quickly to BoxType. If we had real data, we would have to consider whether that was worth migrating older data to the new model or accept the slightly odd naming.

There is no instructions on whether I should determine if a box should be a "heavy category" or if the user must select it. IE, if a user enters a small box that weighs 50 pounds, do they need to select the "heavy box" option? Or do we determine that for them? 
If there was a front end, we could prompt the user when the price would be cheaper by selecting the option for heavy box. 

The spirit of this change is to prevent over the top weight charges by letting users pick "heavy boxes". So I could automatically select that a box should be heavy when the cost would be cheaper that way.


## Thoughts on phase 5
Due to time constraints, I can get the list of all small boxes, sort them by cost descending, then take every fourth box as a discount. I can do the same with medium boxes, then do the same with all unused boxes. 

By "each parcel can only be used in a discount once", I assume that means any package used in completing a discount set is no longer counted for any other set 
* If you have 6 parcels and four are small, I assume you can apply the 4 small package discount but not also the 5 package discount as the four initial packages were already counted. 

I need to store an array of completed discounts on the order. 


## Other things I would do
I'd like to change the discount calculation to be more efficient. Right now I do a lot of filtering and sorting, and there is likely a dynamic programming approach that would be faster and more efficient.
In a real life scenario, we would probably have the user filling in boxes in real time and the order would need to continuosly update with the best discounts and total price. 