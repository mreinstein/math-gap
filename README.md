# math-gap
math functions that are missing or lacking from the standard javascript library

## clamp

It's 2020 and Javascript still doesn't have `clamp`...

### Usage

`clamp(value, a, b)`

Returns `value`, if it is between `a` and `b`. Otherwise, returns the number
it's gone past.


## lerp

Linearly interpolate between 2 values

### Usage

`lerp(a, b, amount)`

`amount` should be a value between 0 and 1, indicating how far to interpolate from `a` to `b`

```javascript

const val = lerp(10, 20, 0.5) // val === 15
```


## sign

`Math.sign` was added to Javascript somewhat recently. It's behavior regarding `0` is to not give it 
a positive or negative sign:

```javascript
Math.sign(1)  // returns 1
Math.sign(0)  // returns 0
Math.sign(-1) // returns -1
```

In some cases, we want want to consider 0 as a positive value, and alias 0 to 1.
This comes up in games and simulations, e.g., a 2d sprite can only face left or right (-1 or 1)

That's what this module does:
```javascript
sign(1)  // returns 1
sign(0)  // returns 1
sign(-1) // returns -1
```



## round-half-up-symmetric

Javascript's `Math.round()` has some unexpected behavior when rounding negative numbers, in that it rounds torwards +∞:

```javascript
Math.round(-20.5)  // -20
```

This is commonly known as asymmetric rounding. I want symmetric rounding instead:

```javascript
round(-20.6)   // -21
round(-20.5)   // -21
round(-20.4)   // -20
```

That's what this module accomplishes. There are a bunch of modules in npm for rounding but I couldn't find any that satisfied all of these criteria:
* avoids costly error checking on input values
* has no dependencies
* has tests
* is < 10 lines
* works with both es modules and commonjs


### usage

Then round decimals to your heart's content:

```javascript
const result = round(-3.5)  // -4
```


### background
see https://www.eetimes.com/document.asp?doc_id=1274485 for in-depth details of rounding algorithms


## to-degrees

Converts `radians` to its corresponding value in `degrees`.

```javascript
const d1 = toDegrees(0.5235987755982988)  // d1 === 29.999999999999996

const d2 = toDegrees(0.5235987755982989)  // d2 === 30.000000000000004
````


## to-radians

Converts `degrees` to its corresponding value in `radians`.

```javascript
const val = toRadians(30) // val === 0.5235987755982988
````
