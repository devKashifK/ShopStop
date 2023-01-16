import React, { useEffect  } from "react";
import "./Hero.css";
import HeroData from "./HeroData";
import { PrimaryButton } from "../../StyledComponents/StyledComponents";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const time = 3000;

// eslint-disable-next-line react-hooks/exhaustive-deps




  useEffect(() => {
    const timer = setTimeout(() => {
      const NextSlide = index >= HeroData.length -2  ? 0 : index + 1;
      setIndex(NextSlide)
    }, time)
   
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero">
     
      <div className="hero_slider_container"  >
        <div className="slider_cont" >
        {HeroData.map((item, index) => {
          return (
            <div className="hero_slides" key={index} >
              <img
                className="Slider-image"
                src={item.image}
                alt=""
              />
              <div className="hero_info">
                <h3 className="hero_title">{item.title}</h3>
                <p className="hero_descrp">{item.description}</p>
                <Link to="/">
                  <PrimaryButton>{item.button}</PrimaryButton>
                </Link>
              </div>
            </div>
          );
        })}
        </div>
        <div className="slideshowDots">
        {HeroData.map((_, idx) => (
          <div key={idx} className={idx === index ? "slideshowDot slideshowDot_active" : "slideshowDot"} onClick={() => setIndex(idx)}></div>
        ))}
      </div>
      </div>
     
    </section>
  );
}
