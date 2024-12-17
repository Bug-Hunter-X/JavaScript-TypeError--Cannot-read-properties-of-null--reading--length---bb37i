# JavaScript TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of null (reading 'length')` and its solution.  The error arises when attempting to access the `length` property of a null or undefined value.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version with improved error handling.

## Bug
The original code lacks proper null checks, leading to the error when `x` is null.

## Solution
The solution includes a check for `null` and `undefined` before accessing `x.length`, preventing the error and providing a more robust function.