
import { render, screen, cleanup} from '@testing-library/react';
import Template from '../Template';

test('Test for template card availability', () => {

  render(<Template />);
  const template = screen.getByTestId('template');
  expect(template).toBeInTheDocument();

})
