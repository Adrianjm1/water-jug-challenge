import { useState } from 'react';
import { toast } from 'react-toastify';
import { Step } from '../../interfaces/WaterJugChallengeTypes';
import solveWaterJugChallenge from '../../utils/solveWaterJugChallenge';

// This hook manages the state and actions for the Water Jug Challenge
export const useWaterJugChallenge = () => {
    // State for the capacity of jug X
    const [jugX, setJugX] = useState(0);
    // State for the capacity of jug Y
    const [jugY, setJugY] = useState(0);
    // State for the goal amount of water
    const [goal, setGoal] = useState(0);
    // State for the steps of the solution
    const [steps, setSteps] = useState<Step[]>([]);

    // Function to start the challenge
    const handleStart = () => {
        // Solve the challenge with the current capacities and goal
        const solution = solveWaterJugChallenge(jugX, jugY, goal);
        // If there is a solution
        if (solution !== "No solution") {
            // Set the steps to the solution
            setSteps(solution);
            // Show a success message
            toast.success('Here is the solution!')
        } else {
            // If there is no solution, show an error message
            toast.error("No solution");
        }
    };

    // Function to clean the jugs and reset the goal
    const handleClean = () => {
        // Reset the capacities of the jugs
        setJugX(0);
        setJugY(0);
        // Reset the goal
        setGoal(6);
        // Clear the steps
        setSteps([]);
        // Show a success message
        toast.success('Successfully cleaned!')
    }

    // Return the state and actions
    return {
        jugX, setJugX,
        jugY, setJugY,
        goal, setGoal,
        steps, setSteps,
        handleStart,
        handleClean
    };
};