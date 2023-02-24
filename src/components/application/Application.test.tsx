import { render, screen } from "@testing-library/react"
import Application from "./Application"


describe('Application component', () => {
    test("render correctly", () => {
        render(<Application />)
        const nameEle = screen.getByRole('textbox', {
            name:"Name"
        })
        expect(nameEle).toBeInTheDocument();

        const pageH1 = screen.getByRole('heading', {
            name:"Job Application Form"
        })
        expect(pageH1).toBeInTheDocument()

        const pageH2 = screen.getByRole('heading', {
            name:"Section 1"
        })
        expect(pageH2).toBeInTheDocument()

        const bioEle = screen.getByRole('textbox', {
            name:'Bio'
        })
        expect(bioEle).toBeInTheDocument();

        const jobLocationEle = screen.getByRole('combobox')
        expect(jobLocationEle).toBeInTheDocument();

        const checkboxEle = screen.getByRole('checkbox')
        expect(checkboxEle).toBeInTheDocument();

        const buttonEle = screen.getByRole('button')
        expect(buttonEle).toBeInTheDocument();
    })
})