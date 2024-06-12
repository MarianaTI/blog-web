import React from "react";
import { LinkStyled, Name, NavbarStyled } from "./index.style";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarStyled>
      <h1>Glowy</h1>
      <LinkStyled>
        <li><a href="/" className={router.pathname === "/" ? "active" : ""}>Home</a></li>
        <li><a href="/blog" className={router.pathname === "/blog" ? "active" : ""}>Blog</a></li>
        <li><a href="/contact" className={router.pathname === "/contact" ? "active" : ""}>Contact</a></li>
      </LinkStyled>
      <Name>Mariana</Name>
    </NavbarStyled>
  );
};

export default Navbar;
