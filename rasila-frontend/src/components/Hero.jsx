import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  height: 80vh;
  min-height: 400px;
  background-image: url("https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1400&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <Title>Welcome to Rasila Infotainment</Title>
    <Subtitle>Your Complete Audio & Video Production Partner</Subtitle>
  </HeroWrapper>
);

export default Hero;
