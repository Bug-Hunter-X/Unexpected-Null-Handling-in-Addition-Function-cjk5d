# Unexpected Null Handling in Addition Function
This repository demonstrates a common JavaScript bug involving unexpected null handling in a simple addition function.

## Bug Description
The function `foo` is designed to add two numbers. However, it behaves unexpectedly when one or both of the inputs are null. The current implementation returns 0 in such cases, which might not always be the intended behavior.

## Solution
The solution involves explicitly checking for null values and handling them appropriately. This can involve throwing an error, returning a specific value (like NaN), or using a default value (like 0) only if it is appropriate in the overall context.