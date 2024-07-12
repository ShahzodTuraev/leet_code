function climbStairs(n) {
  //   70. Climbing Stairs
  // Initialize two variables to store the number of ways to climb to the
  // current step (current) and the previous step (previous).
  let previous = 1;
  let current = 1;

  // Loop through the steps from 1 to n - 1.
  // No loop iteration for the first step as there is only one way to climb one step.
  for (let i = 1; i < n; i++) {
    // Update the number of ways for the current step by adding the number
    // of ways to climb to the previous step to the number of ways for
    // the step before it (previous + current will give us the new current).
    [previous, current] = [current, previous + current];
  }

  // Return the number of ways to climb to the top of the staircase, which will
  // be stored in 'current' after the loop finishes.
  return current;
}

console.log(climbStairs(5));
