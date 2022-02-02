import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
    return <h1>Loading</h1>;
};

function App() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        {routes?.map((route, i) => {
                            return <Route key={i} path={route.path} element={route.element}></Route>;
                        })}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
