

export default function Application() {
    
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type='text' id="name" placeholder="Enter name" minLength={4} /><br></br>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" placeholder="About..."/><br></br>
                <label>Job Location:</label>
                <select>
                    <option value={'USA'}>USA</option>
                    <option value={'UK'}>UK</option>
                    <option value={'CANADA'}>CANADA</option>
                    <option value={'INDIA'}>INDIA</option>
                    <option value={'JAPAN'}>JAPAN</option>
                </select><br></br>
                <input type='checkbox' />
                <label>I agree to term and conditions</label><br></br>
                <button>Submit</button>
            </form>
        </>
    )
}