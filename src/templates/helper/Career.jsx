import React, {useState} from "react";

function CareerHelper() {
    const [career, setcareerHeader] = useState("Get Ready For Huge Savings, Don't Miss Our Exclusive Sale!");
    const [careerdescription, setcareerDescription] = useState("Get ready to shop 'til you drop! Our exclusive sale is here, offering unbeatable discounts on your favorite products. And that's not all—we also provide free shipping on all orders over $50, hassle-free returns, and a dedicated customer support team to assist you every step of the way.");

    const changecareerDescription = (e) => {
        setcareerDescription(e.target.value);
    }
    
    const changecareerHeader = (e) => {
        setcareerHeader(e.target.value);
    }

    return { career, setcareerHeader, careerdescription, setcareerDescription, changecareerDescription, changecareerHeader };
}



export {CareerHelper}