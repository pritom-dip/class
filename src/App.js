import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader/Loader";
import AddToCartProvider from "./contexts/AddToCartContext";

function App() {
    return (
        <AddToCartProvider>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <Routes>
                        {routes?.map((route, i) => {
                            return <Route key={i} path={route.path} element={route.element}></Route>;
                        })}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </AddToCartProvider>
    );
}

export default App;
