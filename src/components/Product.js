import React from "react";
import citroenen from "../assets/citroenen.jpeg";
// {image, titel, description}
function Product ({image, titel, description }) {
    return (
        <article className="product">
            <img src={image} alt={titel}/>
            <h2 className="product-name">{titel}</h2>
            <p className="product-description">{description}</p>
            </article>
    );
}
export default Product;