import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { menuList } from "../menuList/menuList";

import { ArrowRight } from "react-bootstrap-icons";

const NavMenu = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [dropDownId, setDropDownId] = useState(null);

    const handleHeaderToggle = () => {
        setMenuActive(!menuActive);
      };
    
      const handleSubMenu = (id) => {
        setDropDownId(id);
      };

    return (
        <>
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
        </>
    )
}

export default NavMenu