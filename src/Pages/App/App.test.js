import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import {App} from './App';

test('renders a image', () => {
  render(<App />);
  const textEl = screen.getByRole("img");

  expect(textEl).toBeInTheDocument();
});
