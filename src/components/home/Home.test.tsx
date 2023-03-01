import { render, screen } from "@testing-library/react"
import Home from "./Home"
import axios from "axios";
import { BASE_URL, fetchUsers } from "./Utils";
jest.mock("axios");


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

// describe("fetchUsers", () => {
//   describe("when API call is successful", () => {
//     it("should return users list", async () => {
//       // given
//       const users = [
//         {userId:1, id: 1, title:"",body:""},
//         {userId:1, id: 2, title:"",body:""},
//       ];
//       axios.get.mockResolvedValueOnce(users);

//       // when
//       const result = await fetchUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//       expect(result).toEqual(users);
//     });
//   });

//   describe("when API call fails", () => {
//     it("should return empty users list", async () => {
//       // given
//     //   const message = "Network Error";
//     //   axios.get.mockRejectedValueOnce(new Error(message));

//       // when
//       const result = await fetchUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//       expect(result).toEqual([]);
//     });
//   });
// });