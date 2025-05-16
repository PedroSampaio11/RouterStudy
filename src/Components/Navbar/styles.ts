import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  h1{
    font-size: 4rem;
    font-weight: 500;
  }
  strong{
    font-weight: bolder;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const LinkRouter  = styled(Link)`
  font-size: 1.6rem;
   color: ${(props) => props.theme.colors.blue1};
`;
