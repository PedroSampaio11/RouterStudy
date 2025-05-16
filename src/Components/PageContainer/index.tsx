import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.purple500};
  height: 100%;
`;
