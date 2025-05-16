import { NavbarContainer, LinkRouter, LinkContainer } from "./styles";
// import { Link } from "react-router-dom"; -- > ta no styled
export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <h1>React <strong>Router</strong></h1>
      <LinkContainer>
        <LinkRouter to="/"> Home</LinkRouter>
        <LinkRouter to="/termos"> Termos</LinkRouter>
        <LinkRouter to="/politicas">Politicas</LinkRouter>
      </LinkContainer>
    </NavbarContainer>
  );
};
