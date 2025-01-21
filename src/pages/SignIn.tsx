import {
  AboutDetails,
  MainContainer,
  PackagePhoto,
  WhatToDo,
  Form,
  Input,
  Submit,
  FooterText,
  ButtonAndHelperText,
} from "../components/SignStyles";
import ProductImage from "/package.jpg";

const SignIn: React.FC = () => {
  return (
    <>
      <MainContainer>
        <div>
          <PackagePhoto src={ProductImage} alt="Product image" />
        </div>
        <div>
          <WhatToDo>Log in to Exclusive</WhatToDo>
          <AboutDetails>Enter your details below</AboutDetails>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <ButtonAndHelperText>
              <Submit type="submit" style={{ width: "14.3rem" }}>
                Log In
              </Submit>
              <FooterText style={{ color: "#db4444" }}>
                Forget Password?
              </FooterText>
            </ButtonAndHelperText>
          </Form>
        </div>
      </MainContainer>
    </>
  );
};

export default SignIn;
