import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
  it('Should render a button component', () => {
    render(<Button text="button" />);
  });

  it('Should have a text', () => {
    render(<Button text="button" />);

    expect(screen.getByText('button')).toBeTruthy();
  });

  it('Should call onClick handler when clicked', async () => {
    const onClick = jest.fn();

    render(<Button text="button" onClick={onClick} />);

    await userEvent.click(screen.getByText('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
