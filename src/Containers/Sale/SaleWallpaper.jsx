import React from "react";
import "./wallpaper.css";
import {
  Title,
  SubHeading,
  ProductDesc,
  Button,
} from "../../StyledComponents/StyledComponents";
import { BsArrowRight } from "react-icons/bs";

export default function Sale() {
  return (
    <div className="wallpaper">
      <SubHeading>WINTER CLEARANCE SALE</SubHeading>
      <Title>GET 50% OFF</Title>
      <ProductDesc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vero.
      </ProductDesc>
      <Button>
        Go to Collection <BsArrowRight />
      </Button>
    </div>
  );
}
