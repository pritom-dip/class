import React from "react";
import Product from "../../Partials/Product/Product";

const Products = ({ products }) => {
    return (
        <div className="container">
            <h1>Products</h1>
            <div className="row">
                {products.length > 0
                    ? products?.map(product => <Product key={product.id} product={product} />)
                    : "No Products"}
                <Product />
            </div>
        </div>
    );
};

export default Products;
