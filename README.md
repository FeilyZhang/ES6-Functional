# ES6-Functional
The transformation from ES6 to ES5 is accomplished through Babel.

```
const every = (arr, callback)
```
Check if all elements in the passed array are all NaN.
```
const some = (arr, callback)
```
Check if at least one of all elements in the passed in array is NaN.
```
const forEach = (arr, callback)
```
Traversing the array and manipulating the elements through a callback function.
```
const map = (arr, callback)
```
It is basically the same as the forEach function, but the result of the operation of the callback function on the element is pushed into the array, and finally the result is unified.
```
const filter = (arr, callback)
```
Filter the array elements and return them in the array of pushed results that match the filter criteria.
```
const curry = (callback)
```
Currying, used to convert a multi-parameter function into a nested unary function.
```
const compose = (...callbacks)
const pipe = (...callbacks)
```
Functional combination and pipeline
