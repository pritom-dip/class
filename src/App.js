// import "./App.css";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import Test from "./components/Test/Test";

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

        // const fetchData = async () => {
        //     try {
        //         const resonse = await fetch("https://jsonplaceholder.typicode.com/todos");
        //         const res = await resonse.json();
        //         setDatas(res);
        //     } catch (err) {
        //         console.log(err.message);
        //     }
        // };
        // fetchData();
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className="App">
                <Test />
            </div>
        </Suspense>
    );
}

export default App;
