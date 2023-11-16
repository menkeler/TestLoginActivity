// App.test.jsx
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from './Input';

describe('App Component', () => {
    it('should render the textbox', () => {
        render(<Input />);
        screen.debug();
        
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });
    it('should be typed', () => {
        render(<Input onChange={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(input).toHaveValue('New Value');
      });
    it('should render the label', () => {
        render(<Input label='Username' id='username' type ='text' value="" onChange=""/>);
        screen.debug();
        const label = screen.getByLabelText('Username');
        expect(label).toBeInTheDocument();
    });
});
