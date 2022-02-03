import { lazy } from "react";
import ProtectedRoute from "./protectedRoute";

const Home = lazy(() => import("../pages/Home.page"));
const About = lazy(() => import("../pages/About.page"));
const Product = lazy(() => import("../pages/Product.page"));
const Login = lazy(() => import("../pages/Login.page"));

const routes = [
    {
        name: "home",
        element: <Home />,
        path: "/",
    },
    {
        name: "about",
        element: <About />,
        path: "/about",
    },
    {
        name: "productid",
        element: (
            <ProtectedRoute>
                <Product />
            </ProtectedRoute>
        ),
        path: "/product/:id",
    },
    {
        name: "login",
        element: <Login />,
        path: "/login",
    },
];

export default routes;
