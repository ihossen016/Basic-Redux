import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    const handleRemove = productId => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h2>Cart</h2>

            <div className="cartWrapper">
                {cartItems.map(item => (
                    <div className="cartCard" key={item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        <h5>${item.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
