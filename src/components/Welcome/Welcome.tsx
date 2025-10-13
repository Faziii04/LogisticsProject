import { Link } from "react-router-dom"




export default function Welcome() {
    return(
        <main>
            hey.. you seem to not be logged in.. how about we proceed with that? 
            <button><Link to="/login">Click to Log in!</Link></button>
        </main>
    )
}