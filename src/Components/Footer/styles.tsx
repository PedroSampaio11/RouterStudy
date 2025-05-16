import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.5rem;
  width: 100%;
    color: ${(props) => props.theme.colors.white};
`;
