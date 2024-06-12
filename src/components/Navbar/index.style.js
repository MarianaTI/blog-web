import styled from "@emotion/styled";

export const NavbarStyled = styled.nav`
    width: 80%;
    height: 50px;
    background-color: var(--secondary-500);
    border-radius: 15px;
    margin: 24px 0;
    color: var(--neutral);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h1{
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 600;
    }
`;

export const LinkStyled = styled.div`
    display: flex;
    gap: 80px;
    a{
        cursor: pointer;
    }
`;