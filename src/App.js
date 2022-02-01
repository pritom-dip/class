// import "./App.css";
import axios from "axios";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Test from "./components/Test/Test";
import AppProvider from "./contexts/AppProvider";

const Loader = () => {
    return <h1>Loading...</h1>;
};

function App() {
    const [data, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: listData } = await axios.get("https://jsonplaceholder.typicode.com/todos");
                setDatas(listData);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <AppProvider>
                <div className="App">
                    <Test />
                </div>
            </AppProvider>
        </Suspense>
    );
}

export default App;
