import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.blue2};
  font-size: 2rem;
`;
