import React from "react";
import styled from "styled-components";
export const Politicas = () => {
  return (
    <Container data-aos="fade-left" data-aos-duration="500">
      Politicas
    </Container>
  );
};
const Container = styled.section`
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.blue2};
  font-size: 2rem;

`;
