import React from "react";
import {
  Language,
  LanguageContainer,
  UpperPart,
  SaleInfo,
  ShopNow,
  Title,
  MenuElement,
  SearchContainer,
  SearchInput,
  DownPart,
  Menu,
  Line,
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
      <DownPart>
        <Title>Exclusive</Title>
        <Menu>
          <MenuElement>Home</MenuElement>
          <MenuElement>Contact</MenuElement>
          <MenuElement>About</MenuElement>
          <MenuElement>Sign Up</MenuElement>
        </Menu>
        <SearchContainer>
          <SearchInput type="text" placeholder="What are you looking for?" />
          <img src={Search} alt="Search" />
        </SearchContainer>
      </DownPart>
      <Line></Line>
    </>
  );
};

export default HeaderLayout;
