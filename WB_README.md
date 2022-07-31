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

