import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 32px;
  font-family: var(--primary_font);
`;

export const SubHeading = styled.p`
  font-size: 16px;
  font-family: var(--third_font);
`;
export const CaptionHeading = styled.h2`
  color: var(--black);
  font-size: 30px;
  line-height: 36px;
  font-family: var(--third_font);
  font-weight: 700;
`;
export const CaptionSubHeading = styled.h2`
  color: var(--black);
  font-size: 16px;
  line-height: 24px;
  font-family: var(--third_font);
  font-weight: 400;
`;

export const PrimaryButton = styled.button`
  font-family: var(--secondary_font);
  font-size: 16px;
  background-color: white;
  color: black;
  outline: none;
  border: none;
  padding: 10px 20px 10px 20px;
`;
export const Button = styled.button`
  font-family: var(--secondary_font);
  font-size: 16px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  padding: 10px 20px 10px 20px;
  width: 20%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
`;

export const SmallTitle = styled.h3`
  font-family: var(--third_font);
  font-size: 14px;
  font-weight: 400;
  color: var(--balck);
  text-transform: Capatilize;
  line-height: 20px;
`;
export const Title = styled.h3`
  font-family: var(--secondary_font);
  font-size: 24px;
  font-weight: bold;
  color: var(--balck);
  text-transform: Capatilize;
  line-height: 18px;
`;
export const ModalTitle = styled.h3`
  font-family: var(--third_font);
  font-size: 24px;
  font-weight: bold;
  color: var(--balck);
  text-transform: Capatilize;
  line-height: 32px;
`;
export const ProductDetail = styled.p`
  color: var(--text);
  font-family: var(--third_font);
  font-size: 14px;
`;
export const ProductCategory = styled.p`
  color: var(--black);
  font-family: var(--third_font);
  font-size: 14px;
  line-height : 20px;
`;
export const ProductTitle = styled.h3`
  color: var(--black);
  font-size: 18px;
  line-height: 28px;
  font-family: var(--third_font);
  font-weight: 600;
`;
export const ProductDesc = styled.p`
  color: #5a5a5a;
  font-family: var(--third_font);
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
`;
export const ProductPrice = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: black;
  font-family: var(--third_font);
  margin-left: 0px;
  font-weight: 600;
`;
export const UnitPrice = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  font-family: var(--third_font);
  margin-left: 0px;
`;
export const ProductPriceDis = styled.p`
  text-decoration: line-through;
  font-size: 16px;
  line-height: 24px;
  color: #707070;
  font-family: var(--third_font);
`;
export const ProductSubHeading = styled.p`
  color: black;
  font-family: var(--third_font);
  font-size: 13px;
  line-height: 13px;
  margin: auto;
  text-decoration: underline;
  text-transform: Uppercase;
  width: fit-content;
  padding-top: 25px;
  letter-spacing: 1px;
  font-weight: 700;
`;
export const AddtoCart = styled.button`
  width: 50%;
  font-family: var(--third_font);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 4px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 05px;
  border: none;
`
export const AddtoWishList = styled.button`
  width: 50%;
  font-family: var(--third_font);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 4px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 05px;
  border: none;
`

