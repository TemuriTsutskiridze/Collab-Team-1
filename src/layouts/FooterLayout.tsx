import QRCode from "/qrcode.jpg";
import Appstore from "/appstore.jpg";
import GooglePlay from "/google-play.jpg";
import Facebook from "/facebook.png";
import Twitter from "/twitter.png";
import Instagram from "/instagram.png";
import Linkedin from "/linkedin.png";
import {
  FooterContainer,
  SubTitle,
  Title,
  Section,
  ImagesContainer,
  SubImagesContainer,
  SocialINetworkImagesContainer,
  Image,
  Copyright,
  FooterInnerContainer,
  CopyrightContainer,
  CopyrightText,
} from "../components/FooterLayoutStyles";
import CopyRightRUle from "/icon-copyright.png";

const FooterLayout: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <div>
            <Title>Exclusive</Title>
            <Section>
              <SubTitle style={{ fontSize: "2rem" }}>Subscribe</SubTitle>
            </Section>
          </div>
          <div>
            <Title>Support</Title>
            <Section>
              <SubTitle>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</SubTitle>
              <SubTitle>exclusive@gmail.com</SubTitle>
              <SubTitle>+88015-88888-9999</SubTitle>
            </Section>
          </div>
          <div>
            <Title>Account</Title>
            <Section>
              <SubTitle>My Account</SubTitle>
              <SubTitle>Login / Register</SubTitle>
              <SubTitle>Cart</SubTitle>
              <SubTitle>Wishlist</SubTitle>
              <SubTitle>Shop</SubTitle>
            </Section>
          </div>
          <div>
            <Title>Quick Link</Title>
            <Section>
              <SubTitle>Privacy Policy</SubTitle>
              <SubTitle>Terms Of Use</SubTitle>
              <SubTitle>FAQ</SubTitle>
              <SubTitle>Contact</SubTitle>
            </Section>
          </div>
          <div>
            <Title>Download App</Title>
            <Section>
              <SubTitle style={{ fontSize: "1.2rem" }}>
                {" "}
                Save $3 with App New User Only
              </SubTitle>
              <ImagesContainer>
                <img src={QRCode} alt="QR code" />
                <SubImagesContainer>
                  <img src={GooglePlay} alt="QR code" />
                  <img src={Appstore} alt="QR code" />
                </SubImagesContainer>
              </ImagesContainer>
              <SocialINetworkImagesContainer>
                <Image src={Facebook} alt="Fcebook" />
                <Image src={Twitter} alt="Twitter" />
                <Image src={Instagram} alt="Instagram" />
                <Image src={Linkedin} alt="Linkedin" />
              </SocialINetworkImagesContainer>
            </Section>
          </div>
        </FooterInnerContainer>
        <CopyrightContainer>
          <Copyright src={CopyRightRUle} alt="Copyright" />
          <CopyrightText>
            Copyright Rimel 2022. All right reserved
          </CopyrightText>
        </CopyrightContainer>
      </FooterContainer>
    </>
  );
};

export default FooterLayout;
