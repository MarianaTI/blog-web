import styled from "@emotion/styled";

export const NavbarStyled = styled.nav`
  width: 60%;
  height: 50px;
  background-color: var(--secondary-500);
  border-radius: 20px;
  margin: 24px 0;
  color: var(--neutral);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 30px 0 rgba(0, 0, 0, 0.1);
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 600;
  }
  @media (max-width: 320px) {
    width: 90%;
    padding: 16px;
  }
`;

export const LinkStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 50px;
  a {
    cursor: pointer;
    color: var(--neutral);
    font-weight: 300;
    ::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--neutral);
      transition: 0.5s;
    }
    :hover::before {
      width: 100%;
    }
    &.active {
      font-weight: 600;
    }
  }
  @media (max-width: 320px) {
    gap: 8px;
  }
`;

export const Name = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;
