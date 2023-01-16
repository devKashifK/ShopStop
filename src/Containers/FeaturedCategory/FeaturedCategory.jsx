import React, { useContext } from "react";
import AppContext from "../../GlobalStates/GlobalState";
import { CaptionHeading, ProductTitle } from "../../StyledComponents/StyledComponents";
import "./featuredcategory.css"

export default function FeaturedCategory(){
    const {Prod} = useContext(AppContext)
    const Shoes = Prod.filter((item) => item.category.name === "Shoes");
    const Clothes = Prod.filter((item) => item.category.name === "Clothes")
    const Electronics = Prod.filter((item) => item.category.name === "Electronics");
    const Furniture = Prod.filter((item) => item.category.name === "Furniture");
    const Others = Prod.filter((item) => item.category.name === "Others");
        
    
return(
    <section className="featured_category">
       <CaptionHeading>Featured Categories</CaptionHeading>
       <div className="featured_cate_conatiner">
        <div className="product_filter_conatiner">
        <ProductTitle>Shoes</ProductTitle>
            <div className="product_filter_box">
                
        {Shoes.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image hoveR" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
        <div className="product_filter_conatiner">
        <ProductTitle>Clothes</ProductTitle>
            <div className="product_filter_box">
                
        {Clothes.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
        <div className="product_filter_conatiner">
        <ProductTitle>Electronics</ProductTitle>
            <div className="product_filter_box">
                
        {Electronics.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
        <div className="product_filter_conatiner">
        <ProductTitle>Furniture</ProductTitle>
            <div className="product_filter_box">
                
        {Furniture.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
        <div className="product_filter_conatiner">
        <ProductTitle>Others</ProductTitle>
            <div className="product_filter_box">
                
        {Others.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
        <div className="product_filter_conatiner">
        <ProductTitle>Kids</ProductTitle>
            <div className="product_filter_box">
                
        {Clothes.slice(0 , 3).map((item) => {
            return(
                <div className="product_filter_image" style={{backgroundImage : `url(${item.images[0]})`}}></div>
            )
        })}
        </div>
        </div>
       </div>
    </section>
)
}