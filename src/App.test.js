import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar with Display text', () => {
  render(<App />);
  const displayElement = screen.getByText(/Display/i);
  expect(displayElement).toBeInTheDocument();
});
