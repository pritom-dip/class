import { lazy } from "react";

const Home = lazy(() => import("../pages/Home.page"));
const About = lazy(() => import("../pages/About.page"));
const Product = lazy(() => import("../pages/Product.page"));

const routes = [
    {
        name: "home",
        element: <Home />,
        authentication: false,
        path: "/",
    },
    {
        name: "about",
        element: <About />,
        authentication: false,
        path: "/about",
    },
    {
        name: "productid",
        element: <Product />,
        authentication: false,
        path: "/product/:id",
    },
];

export default routes;
