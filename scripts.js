// Write a program that sums the numbers from 1 to 10.

// We use let because we want the variable to be able to change
let counter = 1; // This is the number the counter will begin at
let sum = 0;

// `<=` is  COMPARISON OPERATOR
// So while the counter is less than or equal to 10 the loop will still run. As soon as the counter reaches 11 it will end the loop and go to the next statement. When the while loop stops that means the expression was proven false.
// We also want to make sure within the while loop there is an increment or we will get stuck in a infinite loop.
while (counter <= 10) {
  sum += counter; // sum = sum + counter;

  // `+=` is an ASSIGNMENT OPERATOR
  counter += 1; // counter = counter + 1;
}
// This will display the sum of the numbers 1-10
console.log(sum);
