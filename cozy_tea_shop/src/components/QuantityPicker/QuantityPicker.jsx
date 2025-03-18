import { useState } from "react"; 
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    const increase = () => {
        setQuantity(quantity + 1);
    };
    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="quantity-picker">
            <button onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}
export default QuantityPicker;

/**
* bootstrap element to buttons
* On Product component, add the following
* create an add to cart button
* when clicked, it should add the product to the cart       
* the function should console.log the product name and quantity
*/