import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Proovitöö text', () => {
  render(<App />);
  const textElement = screen.getByText(/Proovitöö/i);
  expect(textElement).toBeInTheDocument();
});
