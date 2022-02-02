import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
                console.log(data);
            } catch (err) {}
        };

        fetchData();
    }, [params.id]);

    return <>Product</>;
};

export default Product;
