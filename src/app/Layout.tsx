// Макет Меню

import { Outlet } from "react-router-dom"
import Menu from "../widgets/menu/Menu";

function Layout() {
    return (
        <div>
            <Menu/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;