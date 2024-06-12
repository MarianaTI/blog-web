import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";
import { ChildrenContainer, Footer, NavbarContainer } from "./index.style";

export default function Layout({ children }) {
  const router = useRouter();

  const noNavbar = !router.pathname.match(/login/g);
  return (
    <div>
      <NavbarContainer>{noNavbar && <Navbar />}</NavbarContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer/>
    </div>
  );
}
