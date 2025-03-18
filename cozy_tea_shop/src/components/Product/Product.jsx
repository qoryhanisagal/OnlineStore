import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";   

function Product() {    
    return (
        <div className="product">
        <h5>Title Name</h5>
        <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;