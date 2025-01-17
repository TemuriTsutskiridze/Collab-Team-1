import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8.7rem;
  width: 100%;
  height: 44rem;
  padding: 8rem 0 2.4rem;
  background-color: #000000;
`;

export const Title = styled.h6`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.72px;
  color: #fafafa;
`;

export const SubTitle = styled.h6`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: 0.72px;
  color: #fafafa;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;
  /* max-width: 19.4rem; */
`;

export const ImagesContainer = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 0.8rem;
`;

export const SubImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  /* height: 8.4rem; */
`;

export const SocialINetworkImagesContainer = styled.section`
  display: flex;
  gap: 2.7rem;
`;

export const Image = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: contain;
  margin-top: 2.4rem;
`;
