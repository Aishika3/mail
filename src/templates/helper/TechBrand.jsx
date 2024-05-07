import React, {useState} from "react";

function TechBrand() {
    const [TechHeader, setTechHeader] = useState("Get Ready For Huge Savings, Don't Miss Our Exclusive Sale!");
    const [techDescription, settechDescription] = useState("Get ready to shop 'til you drop! Our exclusive sale is here, offering unbeatable discounts on your favorite products. And that's not all—we also provide free shipping on all orders over $50, hassle-free returns, and a dedicated customer support team to assist you every step of the way.");

    const changeTechDescription = (e) => {
        settechDescription(e.target.value);
    }
    
    const changeTechHeader = (e) => {
        setTechHeader(e.target.value);
    }

    return { TechHeader, setTechHeader, techDescription, settechDescription, changeTechDescription, changeTechHeader };
}



export {TechBrand}