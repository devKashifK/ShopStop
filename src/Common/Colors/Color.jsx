import React from "react";
import { ProductTitle } from "../../StyledComponents/StyledComponents";
import "./color.css"

const ColorsData = ["rgb(232, 108, 37)", "rgb(255, 165, 180)","rgb(130, 36, 227)" ,"rgb(221, 51, 51)"];

export default function Colors(){
    return(
        <div className="colors">
            <ProductTitle>Color</ProductTitle>
            <div className="colors_cont">
                {ColorsData.map((color , index) => {
                    return(
                        <div className="color_box" style={{backgroundColor : `${color}` }} key={index}></div>
                    )
                })}
            </div>
        </div>
    )
}