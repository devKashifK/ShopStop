import React from "react"
import { ProductTitle } from "../../StyledComponents/StyledComponents";
import "./size.css";

const sizeData = ["S" , "M" , "L" , "XL"] 

export default function Size(){
    return(
        <div className="size_box">
            <ProductTitle>Size</ProductTitle>
            <div className="size_box_cont">
            {sizeData.map((size , index) => {
                return(
                    <span className="size_name" key={index}>{size}</span>
                )
            })}

            </div>
        </div>
    )
}