import { lazy } from "react";

const Home = lazy(() => import("../Home/Home"));
const Card = lazy(() => import("../Card/Card"));

export default function Test() {
    return (
        <div className="App">
            <Card />
            <Home />
        </div>
    );
}
