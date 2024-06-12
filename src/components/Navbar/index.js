import React from "react";
import { LinkStyled, NavbarStyled } from "./index.style";

const Navbar = () => {
  return (
    <NavbarStyled>
      <h1>Glowy</h1>
      <LinkStyled>
        <a>Home</a>
        <a>Blog</a>
        <a>Contact</a>
      </LinkStyled>
      <span>Mariana</span>
    </NavbarStyled>
  );
};

export default Navbar;
