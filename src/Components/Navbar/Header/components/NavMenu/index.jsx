import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { menuList } from "../menuList/menuList";

import { NavItens, NavItem, Dropdown, ContactButton, Text, Icon } from './style'

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
            <NavItens>
                {menuList.map(({ id, name, path, dropDown, section }) => {
                    return (
                        <NavItem key={id} onClick={() => handleSubMenu(id)} onMouseEnter={() => setDropDownId(id)} onMouseLeave={() => setDropDownId(null)}>
                            <HashLink smooth to={`${path}${section ? section : ""}`}>
                                {name}
                            </HashLink>
                            {dropDown?.length && (
                                <Dropdown visible={dropDownId == id}>
                                    {dropDown.map(({ id, name, path }) => {
                                        return (
                                            <NavItem key={id}>
                                                <HashLink smooth to={path}>
                                                    {name}
                                                </HashLink>
                                            </NavItem>
                                        );
                                    })}
                                </Dropdown>
                            )}
                        </NavItem>
                    );
                })}
            </NavItens>

            <ContactButton>
                <Link
                    to="/contact"
                >
                    <Text>Bora Papear</Text>
                    <Icon>
                        <ArrowRight />
                    </Icon>
                </Link>
            </ContactButton>
        </>
    )
}

export default NavMenu