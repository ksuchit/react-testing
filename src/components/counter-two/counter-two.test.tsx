import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CounterTwo } from "./counter.two"

describe('CounterTwo', () => {
    test('render correctly', () => {
        render(<CounterTwo />)
        const textEle = screen.getByText('Counter Two')
        expect(textEle).toBeInTheDocument()
    })

    //mocking function
    test('handelers are called', async() => {
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<CounterTwo count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        />)
        
        const incrementBtn = screen.getByRole('button', {
            name:/increment/i
        })
        const decrementBtn = screen.getByRole('button', {
            name:/decrement/i
        })
        await userEvent.click(incrementBtn)
        await userEvent.click(decrementBtn) 

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})