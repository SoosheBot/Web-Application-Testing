import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import { addHits, addRuns, addPitchWin, addFoulBall } from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Title card is visible', () => {
  const { findAllByText } = render(<App />);
    findAllByText(/title-card/i);
});

test('adds 1 point to the Lions current score on click', () => {
  let actual = addHits(0);
  let expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(50);
});

test('adds 4 point to the Lions current score on click', () => {
  let actual = addRuns(0);
  let expected = 4;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(9);
});

test('adds 3 points to Lions current score on click', () => {
  let actual = addPitchWin(0);
  let expected = 3;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(4);
});

test('adds 1 point to Lions current score on click', () => {
  let actual = addFoulBall(0);
  let expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(2);

});