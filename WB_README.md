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

