import React, {useState} from "react";

function ShoeBrand() {
    const [ShoeHeader, setShoeHeader] = useState("Get Ready For Huge Savings, Don't Miss Our Exclusive Sale!");
    const [shoeDescription, setshoeDescription] = useState("Get ready to shop 'til you drop! Our exclusive sale is here, offering unbeatable discounts on your favorite products. And that's not all—we also provide free shipping on all orders over $50, hassle-free returns, and a dedicated customer support team to assist you every step of the way.");

    const changeShoeDescription = (e) => {
        setshoeDescription(e.target.value);
    }
    
    const changeShoeHeader = (e) => {
        setShoeHeader(e.target.value);
    }

    return { ShoeHeader, setShoeHeader, shoeDescription, setshoeDescription, changeShoeDescription, changeShoeHeader };
}



export {ShoeBrand}