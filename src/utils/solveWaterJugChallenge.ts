// Define the type of a step, which includes the state of the jugs after the step and the action performed
type Step = {
  jugX: number;
  jugY: number;
  action: string;
};

// Define the type of a state, which is a tuple of two numbers representing the amounts of water in the jugs
type State = [number, number];

// The main function that solves the problem
function solveWaterJugChallenge(x: number, y: number, z: number): Step[] | "No solution" {
  // If the amount of water we want to measure is greater than the capacity of both jugs, there is no solution
  if (z > x && z > y) {
    return "No solution";
  }

  // Initialize the BFS queue with the initial state, which is both jugs empty, and no steps performed
  const queue: [State, Step[]][] = [[[0, 0], []]];
  // Initialize the set of visited states with the initial state
  const visited: { [key: string]: boolean } = { '0,0': true };

  // While there are states in the queue
  while (queue.length > 0) {
    // Take the first state from the queue and the steps to reach it
    const [[jugX, jugY], steps] = queue.shift()!;

    // If this state meets the goal, return the steps to reach it
    if (jugX === z || jugY === z) {
      return steps;
    }

    // Generate all possible states from the current state
    const nextStates: [State, Step][] = [
      // Fill jug X from the source
      [[x, jugY], { jugX: x, jugY, action: "Fill Jug X" }],
      // Fill jug Y from the source
      [[jugX, y], { jugX, jugY: y, action: "Fill Jug Y" }],
      // Empty jug X
      [[0, jugY], { jugX: 0, jugY, action: "Empty Jug X" }],
      // Empty jug Y
      [[jugX, 0], { jugX, jugY: 0, action: "Empty Jug Y" }],
      // Transfer water from jug X to jug Y until jug Y is full or jug X is empty
      [[Math.max(0, jugX + jugY - y), Math.min(y, jugX + jugY)], { jugX: Math.max(0, jugX + jugY - y), jugY: Math.min(y, jugX + jugY), action: "Transfer from Jug X to Jug Y" }],
      // Transfer water from jug Y to jug X until jug X is full or jug Y is empty
      [[Math.min(x, jugX + jugY), Math.max(0, jugX + jugY - x)], { jugX: Math.min(x, jugX + jugY), jugY: Math.max(0, jugX + jugY - x), action: "Transfer from Jug Y to Jug X" }],
    ];

    // For each possible state
    for (const [[nextJugX, nextJugY], step] of nextStates) {
      // If it has not been visited before
      if (!visited[`${nextJugX},${nextJugY}`]) {
        // Mark as visited and add to the queue with the steps to reach it
        visited[`${nextJugX},${nextJugY}`] = true;
        queue.push([[nextJugX, nextJugY], [...steps, step]]);
      }
    }
  }

  // If all possible states have been visited and none meet the goal, there is no solution
  return "No solution";
}

// Export the function so it can be used in other modules
export default solveWaterJugChallenge;