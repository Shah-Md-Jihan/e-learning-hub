import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            }
        ]
    }
]);