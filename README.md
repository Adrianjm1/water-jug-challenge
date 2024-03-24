# Water Jug Challenge Solution

This project is a solution to the Water Jug Challenge, implemented in React and TypeScript.

## Description

This application solves the Water Jug Challenge, a classic problem involving pouring water between jugs of different sizes to reach a certain goal. The solution is visualized in a user-friendly interface, with animations provided by Framer Motion and notifications using react-toast.

## Algorithmic Approach

The Water Jug Challenge is solved using the Breadth-First Search (BFS) algorithm, based on Diophantine equations in number theory. The problem is solvable if the target amount of water is a multiple of the greatest common divisor (GCD) of the jug sizes.

The algorithm represents each pour operation as a state in BFS, where each state is the current amount of water in the jugs. It starts with the initial state (both jugs empty) and generates all possible states (filling, emptying, or transferring water). Each new state is added to a queue.

The algorithm continues until it finds a state that meets the goal (one jug contains the target amount of water) or has explored all possible states. If a state meets the goal, it returns the steps to reach that state. If no state meets the goal, it returns "No solution".

The BFS approach ensures the solution achieves the target amount of water in the minimum number of steps, as BFS visits states closest to the initial state first.


## Test Cases for Validation

Here are some test cases you can use to validate the solution:


- For jugs of sizes 2 and 100, and a target of 96, the expected number of steps is 4.
- For jugs of sizes 2 and 10, and a target of 4, the expected number of steps is 4.
- For jugs of sizes 15 and 25, and a target of 35, there is no solution.
- For jugs of sizes 5 and 7, and a target of 5, the expected number of steps is 1.
- For jugs of sizes 3 and 4, and a target of 7, there is no solution.
- For jugs of sizes 7 and 10, and a target of 3, the expected number of steps is 2.
- For jugs of sizes 6 and 9, and a target of 7, there is no solution.
- For jugs of sizes 3 and 3, and a target of 5, there is no solution.

## Installation

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/Adrianjm1/water-jug-challenge.git`
2. Navigate to the project directory: `cd water-jug-challenge`
3. Install dependencies: `npm install`
4. Start the project: `npm run dev`

## Usage

After starting the project, navigate to `http://localhost:5173/` in your web browser. Enter the sizes of the jugs and the goal amount of water, then click "Start" to see the solution.

## Live Demo

- Check out the live demo page `https://water-jug-challenge-am.netlify.app`

## Contributing

This project is not currently open for contributions.
