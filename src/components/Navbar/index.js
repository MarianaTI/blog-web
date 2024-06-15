import React, { useState } from "react";
import { LinkStyled, Name, NavbarStyled } from "./index.style";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setIsDropdownOpen(false);
  };

  return (
    <NavbarStyled>
      <h1>Glowy</h1>
      <LinkStyled>
        <li>
          <a
            href="/blog"
            className={router.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </a>
        </li>
      </LinkStyled>
      <Dropdown
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleOptionClick={handleOptionClick}
      />
    </NavbarStyled>
  );
};

export default Navbar;
