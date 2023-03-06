import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe('Home component', () => {
    
    test('home rendering test', () => {
        render(<Home />)
        const ele = screen.getByText(/hello/i)
        expect(ele).toBeInTheDocument();

        const img = screen.getByAltText('profile')
        expect(img).toBeInTheDocument();
    })
    
    test('render a name', () => {
        render(<Home name="suchit" />)
        const ele = screen.getByText(/hello suchit/i)
        expect(ele).toBeInTheDocument();
    })

})

