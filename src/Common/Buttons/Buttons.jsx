import React from 'react';
import "./button.css"
import { BsSuitHeart, BsFillCartPlusFill } from "react-icons/bs";

export function  AddToCartButton(){
    return(
        <button className='addto_cart'>Add to Cart <BsFillCartPlusFill /></button>
    )
}

export function AddToWhistlist(){
    return(
        <button className='addto_wishtlist'>Whistlist <BsSuitHeart /></button>
    )
}