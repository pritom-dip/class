import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AddToCartContext } from "../../../contexts/AddToCartContext";

function Product({ product }) {
    const { addingToCart } = useContext(AddToCartContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div
                    className="imgWrapper"
                    style={{
                        height: "300px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        style={{
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                        src={product?.image}
                        className="card-img-top"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <Link to={`/product/${product?.id}`}>
                        <h5 className="card-title">{product?.title}</h5>
                    </Link>

                    <div className="d-flex gap-3 align-items-center my-3">
                        <h6>Category</h6>
                        <span className="badge bg-secondary">{product?.category}</span>
                    </div>
                    <p className="card-text">{product?.description}</p>
                    <button onClick={() => addingToCart(product)} className="btn btn-secondary">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
