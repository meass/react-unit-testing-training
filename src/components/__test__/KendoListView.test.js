import KendoListView from "../KendoListView";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";

test('should render contact list', () => {
    render(<KendoListView />)
    const contactList = screen.getByText('Contact list')
    expect(contactList).toBeInTheDocument();
})

// test('should render 3 contact lists on 1st page', () => {
//     render(<KendoListView />)
//     const contactList = document.querySelector('.k-listview-content')
//     screen.debug(contactList)
// })

test('Check render 3 buttons', () => {
    render(<KendoListView />)
    const buttons = document.querySelector('.k-pager-numbers')
    const { getAllByRole } = within(buttons)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(3);
})

test('Check user go to first page', async() => {
    render(<KendoListView />)
    const ulElement = document.querySelector('.k-pager-numbers')
    
    fireEvent.click(ulElement.firstChild.firstChild)
    await waitFor(()=> {
        expect(ulElement.firstChild.firstChild).toHaveClass('k-state-selected')
    })
})

test('Check user go to last page', async() => {
    render(<KendoListView />)
    const ulElement = document.querySelector('.k-pager-numbers')

    fireEvent.click(ulElement.lastChild.firstChild)
    await waitFor(()=> {
        expect(ulElement.lastChild.firstChild).toHaveClass('k-state-selected')
    })
})
