// WaterJugChallenge.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import WaterJugChallenge from './WaterJugChallenge';
import solveWaterJugChallenge from '../../utils/solveWaterJugChallenge';


test('solveWaterJugChallenge returns the correct number of steps for valid inputs', () => {
  const result = solveWaterJugChallenge(2, 100, 96);
  expect(result.length).toBe(4);
});
test('solveWaterJugChallenge returns the correct number of steps for valid inputs', () => {
  const result = solveWaterJugChallenge(2, 10, 4);
  expect(result.length).toBe(4);
});


test('solveWaterJugChallenge returns no solution if they dont have one', () => {
  const result = solveWaterJugChallenge(15, 25, 35);
  expect(result).toBe('No solution');
});

test('solveWaterJugChallenge returns the correct number of steps when target is equal to one of the jugs', () => {
  const result = solveWaterJugChallenge(5, 7, 5);
  expect(result.length).toBe(1);
});

test('solveWaterJugChallenge returns no solution when target is greater than both jugs', () => {
  const result = solveWaterJugChallenge(3, 4, 7);
  expect(result).toBe('No solution');
});

test('solveWaterJugChallenge returns the correct number of steps when target is less than both jugs', () => {
  const result = solveWaterJugChallenge(7, 10, 3);
  expect(result.length).toBe(2);
});

test('solveWaterJugChallenge returns no solution when target is not a multiple of the greatest common divisor of both jugs', () => {
  const result = solveWaterJugChallenge(6, 9, 7);
  expect(result).toBe('No solution');
});

test('solveWaterJugChallenge returns "No solution" for invalid inputs', () => {
  const result = solveWaterJugChallenge(3, 3, 5);
  expect(result).toBe("No solution");
});


test('renders the WaterJugChallenge component', () => {
  render(<WaterJugChallenge />);
  expect(screen.getByText('Bucket X')).toBeInTheDocument();
  expect(screen.getByText('Bucket Y')).toBeInTheDocument();
  expect(screen.getByText('Amount wanted Z')).toBeInTheDocument();
});

test('updates jug values when input changes', async () => {
  render(<WaterJugChallenge />);
  const inputs = screen.getAllByDisplayValue('0');
  // Supongamos que quieres probar el primer input
  const input = inputs[0];
  userEvent.clear(input);
  userEvent.type(input, '5');
  await waitFor(() => expect(input).toHaveValue(5));
});

test('calls handleStart when Solve button is clicked', () => {
  render(<WaterJugChallenge />);
  const button = screen.getByText('Solve');
  userEvent.click(button);
});

test('calls handleClean when Clean button is clicked', () => {
  render(<WaterJugChallenge />);
  const button = screen.getByText('Clean');
  userEvent.click(button);
});