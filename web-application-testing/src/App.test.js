import React from 'react';
import { render } from "@testing-library/react";
// import ReactDOM from 'react-dom';
import App from './App';
import { addHits, addRuns, addPitchWin, addFoulBall } from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Title card is visible', () => {
  const { findAllByText } = render(<App />);
    findAllByText(/title-card/i);
});