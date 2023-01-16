import React, { useContext } from "react";
import AppContext from "../../../GlobalStates/GlobalState";
import { ProductDesc, ProductPrice, ProductPriceDis, ProductTitle } from "../../../StyledComponents/StyledComponents";
import "./card.css"


export default function Card(props){
    const { GetValues } = useContext(AppContext);
    const {item, productBox, productImage, prodDetail} = props;
    return(
        <div
        className="prouctsBox"
        key={item.id}
        onClick={() => GetValues(item)}
        style={productBox}
        >
        {item.images ? (
          <div className="prod_image_cont" style={productImage}>
            <img
              className="prod_image hoveR"
              src={item.images[0]}
              alt=""
            />
          </div>
        ) : (
          "null"
        )}
        <div className="top_prod_detail"  style={prodDetail}>
          <ProductTitle> {item.title} </ProductTitle>
          <ProductDesc>
            {item.description.substring(0, 28)}...
          </ProductDesc>
          <div className="prod_price">
                  <ProductPrice>₹{item.price - 50}</ProductPrice>
                  <ProductPriceDis>₹{item.price}</ProductPriceDis>
                </div>
        </div>
      </div>
    )
}

