import sideImage from "/side-image.png";
import Google from "/icon-google.png";
import {
  PackagePhoto,
  WhatToDo,
  AboutDetails,
  Input,
  MainContainer,
  Form,
  Create,
  SignUpWithGoogle,
  FooterContainer,
  FooterText,
  MainSubContainer,
} from "../components/SignStyles";

const Sign: React.FC = () => {
  return (
    <>
      <MainContainer>
        <div>
          <PackagePhoto src={sideImage} alt="Side image" />
        </div>
        <MainSubContainer>
          <WhatToDo>Create an account</WhatToDo>
          <AboutDetails>Enter your details below</AboutDetails>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
            <Create>Create Account</Create>
          </Form>
          <SignUpWithGoogle>
            <img src={Google} alt="Google icon" />
            <span>Sign up with Google</span>
          </SignUpWithGoogle>
          <FooterContainer>
            <FooterText>Already have account?</FooterText>
            <FooterText
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Log in
            </FooterText>
          </FooterContainer>
        </MainSubContainer>
        {/* <FooterContainer>
          <FooterText>Already have account?</FooterText>
          <FooterText style={{ fontWeight: 500, textDecoration: "underline" }}>
            Log in
          </FooterText>
        </FooterContainer> */}
      </MainContainer>
    </>
  );
};

export default Sign;
