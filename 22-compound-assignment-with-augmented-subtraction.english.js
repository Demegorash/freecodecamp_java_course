/* Compound Assignment With Augmented Subtraction

Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;
Convert the assignments for a, b, and c to use the -= operator.


Tests
Waiting:a should equal 5.
Waiting:b should equal -6.
Waiting:c should equal 2.
Waiting:You should use the -= operator for each variable.
Waiting:You should not modify the code above the specified comment.

Exercise statement:

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1; */

// Resolution

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

console.log(a, b, c);