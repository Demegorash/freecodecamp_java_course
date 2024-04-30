/* Return a Value from a Function with Return.

We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

Tests
Waiting:timesFive should be a function
Waiting:timesFive(5) should return 25
Waiting:timesFive(2) should return 10
Waiting:timesFive(0) should return 0 */

// Resolution

function timesFive(num) {
    return num * 5;
}

const answer = timesFive(5);

console.log(answer);