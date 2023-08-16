import React from "react";
import backImg from "../assets/background.png";
import styled from "styled-components";
export default function BgImage() {
  return (
    <Container>
      <img src={backImg} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width:100vw;
  img{
    height:100vh;
    width:100vw
  }
`;
