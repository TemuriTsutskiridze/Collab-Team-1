import React from "react";
import {
  Language,
  LanguageContainer,
  UpperPart,
  SaleInfo,
  ShopNow,
} from "../components/HeaderLayoutStyles";
import Arrow from "/drop-down.png";
import Search from "/search.png";

const HeaderLayout: React.FC = () => {
  return (
    <>
      <UpperPart>
        <SaleInfo>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </SaleInfo>
        <ShopNow>ShopNow</ShopNow>
        <LanguageContainer>
          <Language>English</Language>
          <img src={Arrow} alt="Arrow" />
        </LanguageContainer>
      </UpperPart>
      <div>
        <h3>Exclusive</h3>
        <section>
          <a>Home</a>
          <a>Contact</a>
          <a>About</a>
          <a>Sign Up</a>
          <div>
            <input type="text" />
            <img src={Search} alt="Search" />
          </div>
        </section>
        <div></div>
      </div>
    </>
  );
};

export default HeaderLayout;
