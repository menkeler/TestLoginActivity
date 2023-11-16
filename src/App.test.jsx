import { fireEvent, render, screen } from '@testing-library/react';
import App from "./App";
import { describe,expect,it } from 'vitest';


describe('App', () => {
    // The App component should render successfully.
  it('should render the App', () => {
    render(<App />);
    screen.debug()
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });

  it('should disable the button if no text is typed in the password textbox', () => {
    render(<App />);
    const userNamedInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText("Login");
    fireEvent.change(userNamedInput, { target: { value: 'asd' } });
    fireEvent.change(passwordInput, { target: { value: 'asd' } });
   

    expect(loginButton).not.toBeDisabled();

   
  
  });

});