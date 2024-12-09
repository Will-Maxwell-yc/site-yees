import { useEffect } from "react";
import Logo from "./components/Logo";
import NavMenu from "./components/NavMenu";

import { Wrapper, Container } from './style'

import logo from "../../../assets/img/logo/logo.png";


const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("menu-fixed", "animated", "fadeInDown")
      : header.classList.remove("menu-fixed");
  };

  return (
    <Wrapper className={`header-section `}>
      <Container className="header-wrapper">
        
          <Logo image={logo} />

          <NavMenu />

      </Container>
    </Wrapper>
  );
};

export default Header;
