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

interface IUser {
  name: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  password: string | null;
}

const userData = async (user: IUser) => {
  if (!user) return;

  try {
    const response = await fetch(`http://localhost:3001/${user.email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("No results.");
    }
  } catch (error) {
    console.log("Not registered.");
  }
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
