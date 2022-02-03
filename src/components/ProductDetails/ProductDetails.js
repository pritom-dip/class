import React from "react";

function ProductDetails({ product }) {
    return (
        <>
            <div className="col-md-4">
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
            </div>
            <div className="col-md-8">
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <h3>{product?.price}</h3>
                <button className="btn btn-lg btn-secondary">Add to Cart</button>
            </div>
        </>
    );
}

export default ProductDetails;
