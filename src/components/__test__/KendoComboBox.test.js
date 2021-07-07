import { render, screen, fireEvent } from "@testing-library/react";
import KendoComboBox from "../KendoComboBox";

test('should print out the content of DOM', () => {
    render(<KendoComboBox />)
    const titleEle = screen.getByText('Allow custom values');
    expect(titleEle).toBeInTheDocument();
})

test('check user click on checkbox', () => {
    render(<KendoComboBox />);

})

