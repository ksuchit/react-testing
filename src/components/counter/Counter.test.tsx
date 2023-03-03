import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"
import Application from '../application/Application'

describe('counter component', () => {
    test('page render', () => {
        render(<Counter />)

        const headEle = screen.getByRole('heading', {
            level:3  //for only more than one heading tag
        })
        expect(headEle).toBeInTheDocument();

        const btnIEle = screen.getByRole('button', {
            name:/increament/i
        })
        expect(btnIEle).toBeInTheDocument();

        const btnDEle = screen.getByRole('button', {
            name:/decrement/i
        })
        expect(btnDEle).toBeInTheDocument();
    })

    test('render a count of 0', () => {
        render(<Counter />)

        const headEle = screen.getByRole('heading')
        expect(headEle).toHaveTextContent('0')
    })

    test('render count 1 after clicking a Inc btn', async() => {
        render(<Counter />)
        
        const incBtn = screen.getByRole('button', {
            name:/increament/i
        })
        
        await userEvent.click(incBtn)
        const countEle = screen.getByRole('heading')
        expect(countEle).toHaveTextContent('1')
    })

    test('render count -1 when click on dec btn', async() => {
        render(<Counter />)

        const decBtn = screen.getByRole('button', {
            name:/decrement/i
        })

        await userEvent.click(decBtn)
        const countEle=screen.getByRole('heading')
        expect(countEle).toHaveTextContent('-1')
    })

    test('render input tag', async() => {
        render(<Counter />)

        const inputEle = screen.getByRole('spinbutton')
        await userEvent.type(inputEle, '14')
        expect(inputEle).toHaveValue(14)
        
        const setBtn = screen.getByRole('button', {
            name:/set/i
        })
        await userEvent.click(setBtn)

        const countEle = screen.getByRole('heading')
        expect(countEle).toHaveTextContent('14')
    })

    test('elements are focused in order when tab btn click', async() => {
        
        render(<Application />)
        render(<Counter />)
        const nameEle = screen.getByRole('textbox', {
            name:"Name"
        })
        const bioEle = screen.getByPlaceholderText(/about.../i)
        const locationEle = screen.getByRole('combobox')
        const checkboxEle = screen.getByRole('checkbox')
        const submitBtn = screen.getByRole('button', {
            name:/submit/i
        })
        const incBtn = screen.getByRole('button', {
            name:/increament/i
        })
        const decBtn = screen.getByRole('button', {
            name:/decrement/i
        })
        const userInput = screen.getByRole('spinbutton')
        const setBtn = screen.getByRole('button', {
            name:/set/i
        })

        await userEvent.tab()
        expect(nameEle).toHaveFocus();

        await userEvent.tab();
        expect(bioEle).toHaveFocus();

        await userEvent.tab();
        expect(locationEle).toHaveFocus();

        await userEvent.tab();
        expect(checkboxEle).toHaveFocus();

        await userEvent.tab();
        expect(submitBtn).toHaveFocus();

        await userEvent.tab();
        expect(incBtn).toHaveFocus();

        await userEvent.tab();
        expect(decBtn).toHaveFocus();

        await userEvent.tab();
        expect(userInput).toHaveFocus();

        await userEvent.tab()
        expect(setBtn).toHaveFocus()

    })
})