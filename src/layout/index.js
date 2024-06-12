import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";
import { ChildrenContainer, Footer, NavbarContainer } from "./index.style";

export default function Layout({ children }) {
  const router = useRouter();

  const noNavbar = !router.pathname.match(/login|register/g);
  return (
    <div>
      <NavbarContainer noNavbar={noNavbar}>{noNavbar && <Navbar />}</NavbarContainer>
      <ChildrenContainer noNavbar={noNavbar}>{children}</ChildrenContainer>
    </div>
  );
}
