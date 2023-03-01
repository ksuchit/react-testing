
// type HomeProps = {
//     name?:string
// }

import Counter from "../counter/Counter";

// import axios from "axios"
export default function Home(props: { name?: string }) {
    
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
    
    return (
        <div>
            Hello {props.name ? props.name : "Guest"}
            <img src="" alt="profile" />
            <Counter />
        </div>
    )
}