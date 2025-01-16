import React from "react";
import {
  Language,
  LanguageContainer,
  MainHeaderContainer,
  SaleInfo,
  ShopNow,
} from "../components/MainHeaderLayoutStyles";
import Arrow from "/drop-down.png";

const MainHeaderLayout: React.FC = () => {
  return (
    <>
      <MainHeaderContainer>
        <SaleInfo>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </SaleInfo>
        <ShopNow>ShopNow</ShopNow>
        <LanguageContainer>
          <Language>English</Language>
          <img src={Arrow} alt="Arrow" />
        </LanguageContainer>
      </MainHeaderContainer>
    </>
  );
};

export default MainHeaderLayout;
