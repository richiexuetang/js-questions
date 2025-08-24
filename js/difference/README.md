# Difference

Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using `SameValueZero` for equality comparisons. The order and references of result values are determined by the first array.

## Arguments

`array (Array)`: The array to inspect.
`values (Array)`: The values to exclude.

## Returns

(Array): Returns the new array of filtered values.

## Examples

```
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3] (case of a sparse array)
The function should return the original array values if values is empty.

difference([1, 2, 3], []); // => [1, 2, 3]
```

## Resources

Lodash \_.difference
