import { useNavigate } from "react-router-dom";
import Footer from "../components/Partials/Footer/Footer";
import Header from "../components/Partials/Header/Header";
import { useEffect, useState } from "react";
import Products from "../components/Home/Products/Products";
import Loader from "../components/Loader/Loader";
import axios from "axios";
import useAsyncTask from "../hooks/useAsyncTask";

const Home = () => {
    const { isLoading, datas: products } = useAsyncTask("https://fakestoreapi.com/products");

    return (
        <>
            <Header />
            {isLoading ? <Loader /> : <Products products={products} />}
            <Footer />
        </>
    );
};
export default Home;
