import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Categories from "../components/Categories/Categories";
import CourseClass from "../components/CourseClass/CourseClass";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFoundPage from "../components/Others/NotFoundPage";
import TermsConditions from "../components/Others/TermsConditions";
import Register from "../components/Register/Register";
import SubDetail from "../components/SubDetail/SubDetail";
import Main from "../layouts/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://e-learning-hub-bd-server.vercel.app/teacher')
            },
            {
                path: '/categories',
                element: <Categories></Categories>,
                loader: () => fetch('https://e-learning-hub-bd-server.vercel.app/categories')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/terms',
                element: <TermsConditions></TermsConditions>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoutes>
                    <CourseClass></CourseClass>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://e-learning-hub-bd-server.vercel.app/categories/${params.id}`)
            }

        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
]);