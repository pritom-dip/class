import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Footer from "../components/Partials/Footer/Footer";
import Header from "../components/Partials/Header/Header";

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
                setProduct(data);
            } catch (err) {}
        };

        fetchData();
    }, [params.id]);

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <ProductDetails product={product} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
