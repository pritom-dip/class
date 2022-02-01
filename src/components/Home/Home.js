import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppProvider";

const Home = () => {
    const { user, setUser, addToCart } = useContext(AppContext);

    return (
        <div className="card">
            <h1>{user?.username}</h1>
            <button onClick={addToCart}>Add me</button>
        </div>
    );
};

export default Home;
