import { render, screen } from "@testing-library/react";
import KendoButton from '../KendoButton';

test('should prints out the contents of the DOM', ()=> {
    render(<KendoButton />)
    const titleEle = screen.getByText('Default Buttons');
    expect(titleEle).toBeInTheDocument();
})

test('A Browse button is rendered', () => {
    render(<KendoButton />);
    const button = document.querySelector('.k-button');
    expect(button).toBeEnabled();
})

test('A disabled Browse button is rendered', () => {
    render(<KendoButton />);
    const disabledBtn = document.querySelector('.k-state-disabled');
    expect(disabledBtn).toBeDisabled();
})