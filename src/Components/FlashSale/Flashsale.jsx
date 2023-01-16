/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import "./flash.css";
import AppContext from "../../GlobalStates/GlobalState";
import { CaptionHeading } from "../../StyledComponents/StyledComponents";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect } from "react";
import Card from "../Products/ProductCard/Card";

const productBox = {
  width: "100%",
  backgroundColor: "white",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "05px",
  gap: "20px",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
};
const productImage = {
  width: "240px",
  height: "245px",
  borderRadius: "05px",
  overflow: "hidden",
  transition: "0.5s ease all",
};
const prodDetail = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
  width: "100%",
};

export default function FlashSale() {
  const { Prod } = useContext(AppContext);
  const [nextSlide , setNextSlide] = useState(0)
  const time = 3000;


  const ProductSlice = Prod.slice(0 , 15)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    const timeDelay = setTimeout(() => {
      const nextIndex = nextSlide >= ProductSlice.length -1  ? 0 : nextSlide + 1;
      setNextSlide(nextIndex)
    }, time)
    return () => clearTimeout(timeDelay)
  
  
  }, [nextSlide]);

  function Next(){
    const nextIndex = nextSlide >= ProductSlice.length -1  ? 0 : nextSlide + 1
    setNextSlide(nextIndex)
  }
  function Prev(){
    const prevIndex = nextSlide === 0 ? 0 : nextSlide - 1
setNextSlide(prevIndex)
  }
  

  return (
    <section className="flash_sale">
      <CaptionHeading>Flash Sale</CaptionHeading>
      <div className="flashSale_slider_container">
      <div className="flash_sale_box_container"  style={{ transform: `translate3d(${-nextSlide * 100}%, 0, 0)`}}>
        {ProductSlice.map((item, index) => {
          return (
            <div className="flash_sale_box" key={item.id} >
              <Card
                item={item}
                productBox={productBox}
                productImage={productImage}
                prodDetail={prodDetail}
              />
              <div className="prod_sold">
                <div className="prod_sold_buy">
                  <p className="prod_sale_text">
                    Sold: <strong> 120</strong>
                  </p>
                  <p className="prod_sale_text">
                    Available: <strong> 180</strong>
                  </p>
                </div>
                <progress id="file" value="50" max="100">
                  {" "}
                  50%{" "}
                </progress>
              </div>
            </div>
          );
        })}
      </div>
           </div>
      <span className="flash_left" onClick={() => Prev()}>
        <BiChevronLeft />
      </span>
      <span className="flash_right" onClick={() => Next()}>
        <BiChevronRight />
      </span>
 
    </section>
  );
}
