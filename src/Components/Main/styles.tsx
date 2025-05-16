import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;
