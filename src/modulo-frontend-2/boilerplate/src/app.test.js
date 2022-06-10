import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza nosso boilerplate', () => {
  render(<App />);
  expect(screen.getByText(/nosso primeiro app/i)).toBeInTheDocument();
});
