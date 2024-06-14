import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  DropdownContainer,
  NameStyled,
  Option,
} from "./index.style";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Dropdown = ({ isOpen, toggleDropdown, handleOptionClick }) => {
  const route = useRouter();
  const dropdownRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const name = useSelector((state) => state.user.username);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleDropdown]);

  const handleIconClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const handleSignOut = () => {
    try {
      Cookies.remove("userToken");
      route.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleMyCrud = () => {
    route.push("/crud");
  };

  const handleMyAccount = () => {
    route.push("/account");
  };

  useEffect(() => {
    setIsClient(true);
    const userLogged = JSON.parse(sessionStorage.getItem("userToken"));
    setUserName(name);
  });

  return (
    <Container>
      <NameStyled onClick={handleIconClick}>
        {isClient ? name : "Cargando"}
      </NameStyled>
      {isOpen && (
        <DropdownContainer ref={dropdownRef} isOpen={isOpen}>
          <Option onClick={handleMyCrud}>Publicaciones</Option>
          <Option onClick={handleMyAccount}>Mi cuenta</Option>
          <Option onClick={handleSignOut}>Cerrar Sesión</Option>
        </DropdownContainer>
      )}
    </Container>
  );
};

export default Dropdown;
