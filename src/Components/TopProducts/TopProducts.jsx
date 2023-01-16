import React, { useContext } from "react";
import {
  CaptionHeading,
  CaptionSubHeading,
} from "../../StyledComponents/StyledComponents";
import AppContext from "../../GlobalStates/GlobalState";
import "./topproducts.css";
import Card from "../Products/ProductCard/Card";

const productBox = {
  width: "470px",
  backgroundColor: "var(--grey)",
  height: "235px",
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "20px",
  gap: "20px",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
};
const productImage = {
  width: "220px",
  height: "235px",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  overflow: "hidden",
  transition: "0.5s ease all",
};
const prodDetail = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
};

export default function TopProducts() {
  const { Prod } = useContext(AppContext);

  return (
    <section className="top-products">
      <div className="top_products_caption">
        <CaptionHeading>Top Products</CaptionHeading>
        <CaptionSubHeading>See All Products</CaptionSubHeading>
      </div>
      <div className="top_prouctsBox_container">
        {Prod.slice(0, 4).map((item) => {
          return (
            <Card
              item={item}
              productBox={productBox}
              productImage={productImage}
              prodDetail={prodDetail}
            />
          );
        })}
      </div>
    </section>
  );
}
