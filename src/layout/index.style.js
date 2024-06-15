import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => (props.noNavbar ? "16px" : "0")};
`;

export const ChildrenContainer = styled.div`
  margin: ${(props) => (props.noNavbar ? "0 100px" : "0")};
  @media (max-width: 320px) {
    margin: ${(props) => (props.noNavbar ? "0 32px" : "0")};
  }
`;

export const Footer = styled.div`
  height: 200px;
  background: var(--primary-100);
`;
