// Роутер страниц

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "../pages/HomePage";
import UsersPage from "../pages/users/UsersPage";
import RegPage from "../pages/users/RegPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/reg",
                element: <RegPage/>
            },
            {
                path: "/users",
                element: <UsersPage/>
            },
        ]
    }
])

export default router;