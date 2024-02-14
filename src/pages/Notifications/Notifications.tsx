import { Link } from "react-router-dom"

export function Notifications(){
    return(
        <>
        <Link to={"/dashboard"}>
            <p>Vrátit se zpět</p>
        </Link>
        <p>Upozornění</p>
        <ul>
            <li>New alert: Red</li>
            <li>New alert: spy</li>
            <li>New alert: is</li>
            <li>New alert: in</li>
            <li>New alert: the</li>
            <li>New alert: base</li>
        </ul>
        </>
    )
}