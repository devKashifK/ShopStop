import React from "react";
import List from "./CategoryData";
import {
  ProductDetail,
  SmallTitle,
} from "../../StyledComponents/StyledComponents";
import { BiChevronRight } from "react-icons/bi";
import "./category.css";

export default function Category() {
  return (
    <section className="category_list">
      <div className="category_container">
        {List.map((item) => {
          return (
            <div className="category_box" key={item.id}>
              <div className="category_info">
                <img className="category_images" src={item.images} alt="" />
                <SmallTitle>{item.name}</SmallTitle>
              </div>
              <div className="category_amount">
              <ProductDetail
                style={{
                  backgroundColor: "#DEE0E3",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                {" "}
                {item.products} 
              </ProductDetail>
              <span ><BiChevronRight size={20}/></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
