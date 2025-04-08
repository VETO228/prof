// Меню приложения

import { Link } from "react-router-dom"

function Menu() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/reg"}>Register</Link>
                <Link to={"/users"}>Users</Link>
            </nav>
        </div>
    )
}

export default Menu