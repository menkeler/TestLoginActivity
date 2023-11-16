import { fireEvent, render, screen } from '@testing-library/react';
import { describe,expect,it } from 'vitest';
import Button from './Button';


describe('App', () => {
  it('should render the Button', () => {
    render(<Button />);
    screen.debug()
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it('should be clicked', () => {
    const func = vi.fn();
    render(<Button onClick={func} disabled={false} />);
    fireEvent.click(screen.getByRole("button"));
    expect(func).toHaveBeenCalled();
  });
  it('should render the Button Disabled', () => {
    render(<Button  disabled = {true}/>);
    screen.debug()
    const button = screen.getByRole("button");
    expect(button).toBeDisabled()
  });
  it('should render the text', () => {
    const buttonText = 'Login';
    render(<Button text={buttonText} />);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
 


});