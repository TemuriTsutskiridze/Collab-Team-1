import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12.9rem;
  margin-top: 6rem;
`;

export const MainSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PackagePhoto = styled.img`
  width: 80.5rem;
  height: 78.1rem;
  object-fit: contain;
`;

export const WhatToDo = styled.h4`
  /* font-family: "Inter"; */
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 0.83;
  letter-spacing: 1.44px;
  color: #000000;
`;

export const AboutDetails = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.5;
  color: #000;
  margin-top: 2.4rem;
`;

export const Input = styled.input`
  width: 37rem;
  height: 3.2rem;
  border: none;
  border-bottom: solid 0.1rem #000000;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.5;
  color: #000;

  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4.8rem;
`;

export const Submit = styled.button`
  width: 37.1rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #db4444;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fafafa;
  border: none;
`;

export const SignUpWithGoogle = styled.div`
  width: 37.1rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.5;
  color: #000;
  margin-top: 1.6rem;
`;

export const FooterContainer = styled.footer`
  display: flex;
  gap: 1.6rem;
  margin-top: 3.4rem;
`;

export const FooterText = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  color: #000;
  opacity: 0.7;
`;

export const ButtonAndHelperText = styled.div`
  display: flex;
  align-items: center;
  gap: 8.7rem;
`;
