import { render, screen } from '@testing-library/react';
import App from '../../components/app/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book Rental Service/i);
  expect(linkElement).toBeInTheDocument();
});
