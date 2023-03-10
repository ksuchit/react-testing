import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application component', () => {

    test("render correctly", () => {
        render(<Application />)
        const nameEle = screen.getByRole('textbox', {
            name:"Name"
        })
        expect(nameEle).toBeInTheDocument();

        const nameEle1=screen.getByLabelText(/name/i)
        expect(nameEle1).toBeInTheDocument()

        const nameEle2 = screen.getByPlaceholderText('Enter name')
        expect(nameEle2).toBeInTheDocument();

        const pageH1 = screen.getByRole('heading', {
            name:"Job Application Form"
        })
        expect(pageH1).toBeInTheDocument()

        const page1h1 = screen.getByRole('heading', {
            level:1
        })
        expect(page1h1).toBeInTheDocument();

        const pageH2 = screen.getByRole('heading', {
            name:"Section 1"
        })
        expect(pageH2).toBeInTheDocument()

        const page1h2 = screen.getByRole('heading', {
            level:2
        })
        expect(page1h2).toBeInTheDocument();

        const bioEle = screen.getByRole('textbox', {
            name:'Bio'
        })
        expect(bioEle).toBeInTheDocument();

        const bioEle2 = screen.getByLabelText(/BIo/i)
        expect(bioEle2).toBeInTheDocument();

        const bioEle3 = screen.getByPlaceholderText('About...')
        expect(bioEle3).toBeInTheDocument();

        const jobLocationEle = screen.getByRole('combobox')
        expect(jobLocationEle).toBeInTheDocument();

        const checkboxEle = screen.getByRole('checkbox')
        expect(checkboxEle).toBeInTheDocument();

        const buttonEle = screen.getByRole('button')
        expect(buttonEle).toBeInTheDocument();
    })
})