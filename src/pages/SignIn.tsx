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
import { useState } from "react";
import { useNavigate } from "react-router";

interface IUser {
  name: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  password: string | null;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const navigateUserPage = useNavigate();

  const userData = async (user: IUser) => {
    if (!user) return;

    try {
      const response = await fetch(`http://localhost:3001/${user.email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("No results.");
      }

      navigateUserPage("/WithAccount");
    } catch (error) {
      console.log("Not registered.");
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <MainContainer>
        <div>
          <PackagePhoto src={ProductImage} alt="Product image" />
        </div>
        <div>
          <WhatToDo>Log in to Exclusive</WhatToDo>
          <AboutDetails>Enter your details below</AboutDetails>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!emailRegex.test(email)) {
                setEmailError("Wrong email format.");
                return;
              }
              const user: IUser = {
                name: null,
                lastName: null,
                email,
                address: null,
                password,
              };
              userData(user);
            }}
          >
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <p style={{ color: "red", fontSize: "1.2rem", marginTop: 0 }}>
                {emailError}
              </p>
            )}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
