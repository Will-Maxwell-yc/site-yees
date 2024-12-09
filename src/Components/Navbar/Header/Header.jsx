import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./components/Logo";

import { Wrapper, Container } from './style'

import logo from "../../../assets/img/logo/logo.png";
import { ArrowRight } from "react-bootstrap-icons";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/",
    section: "#about",
    name: "About",
  },
  {
    id: 3,
    path: "/",
    section: "#projects",
    name: "Work",
  },
  {
    id: 4,
    path: "/",
    section: "#services",
    name: "Services",
    dropDown: [
      {
        id: 1,
        path: "/all-services",
        name: "Services",
      },
      {
        id: 2,
        path: "/service-details",
        name: "Service Details",
      },
    ],
  },
  {
    id: 5,
    path: "/",
    section: "#testimonial",
    name: "Testimonial",
  },
  {
    id: 6,
    path: "/",
    section: "#blog",
    name: "Blog",
    dropDown: [
      {
        id: 1,
        path: "/all-blog",
        name: "Blog",
      },
      {
        id: 2,
        path: "/blog-details",
        name: "Blog Details",
      },
    ],
  },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);

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

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenu = (id) => {
    setDropDownId(id);
  };

  return (
    <Wrapper className={`header-section `}>
      <Container className="container">
        <div className="header-wrapper">

          <Logo image={logo} />
          
          <ul className={`main-menu ${menuActive ? "active" : ""}`}>
            {menuList.map(({ id, name, path, dropDown, section }) => {
              return (
                <li key={id} onClick={() => handleSubMenu(id)}>
                  <HashLink smooth to={`${path}${section ? section : ""}`}>
                    {name}
                  </HashLink>
                  {dropDown?.length && (
                    <ul className={`sub-menu ${dropDownId === id ? "sub-menu_active" : ""}`}>
                      {dropDown.map(({ id, name, path }) => {
                        return (
                          <li key={id}>
                            <HashLink smooth to={path}>
                              {name}
                            </HashLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="menu__components d-flex align-items-center">
            <Link
              to="/contact"
              className="d-flex fw-500 cmn--btn align-items-center gap-2"
            >
              <span className="get__text">Bora Papear</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </Link>
            <div
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
