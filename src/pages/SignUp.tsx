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
import { useNavigate } from "react-router";
import { useState } from "react";

interface IUser {
  name: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  password: string | null;
}

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigateSignIn = useNavigate();

  const userData = async (newUser: IUser) => {
    if (!newUser) return;

    try {
      const response = await fetch(`http://localhost:3001/${newUser.name}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("No results!");
      }

      // const data = await response.json();
      navigateSignIn("/SingIn");
    } catch (error) {
      console.log("Something went wrong.");
    }
  };

  return (
    <>
      <MainContainer>
        <div>
          <PackagePhoto src={sideImage} alt="Side image" />
        </div>
        <MainSubContainer>
          <WhatToDo>Create an account</WhatToDo>
          <AboutDetails>Enter your details below</AboutDetails>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const newUser: IUser = {
                name,
                lastName: null,
                email,
                address: null,
                password,
              };
              userData(newUser);
            }}
          >
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Create type="submit">Create Account</Create>
          </Form>
          <SignUpWithGoogle>
            <img src={Google} alt="Google icon" />
            <span>Sign up with Google</span>
          </SignUpWithGoogle>
          <FooterContainer>
            <FooterText>Already have account?</FooterText>
            <FooterText
              style={{ fontWeight: 500, textDecoration: "underline" }}
              onClick={() => navigateSignIn("/SignIn")}
            >
              Log in
            </FooterText>
          </FooterContainer>
        </MainSubContainer>
      </MainContainer>
    </>
  );
};

export default SignUp;
