import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Partials/Footer/Footer";
import Header from "../components/Partials/Header/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Product 1",
    },
    {
        id: 2,
        name: "Product 2",
    },
];

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const goToPage = id => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

            <Header />
            <Footer />

            {products?.map(product => {
                return (
                    <div>
                        <h1>{product.name}</h1>
                        <button onClick={() => goToPage(product.id)} className="btn btn-sm btn-danger">
                            Go to the link
                        </button>
                    </div>
                );
            })}
        </>
    );
};
export default Home;
