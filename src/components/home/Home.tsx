
// type HomeProps = {
//     name?:string
// }
export default function Home(props:{name?:string}) {
    return (
        <div>Hello {props.name ? props.name : "Guest"}</div>
    )
}