import styled from "@emotion/styled";

export const CardStyled = styled.div`
  width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 16px;
  transition: background-color 0.5s ease, transform 0.5s ease;
  :hover {
    transform: translateY(-15px);
  }
`;

export const Top = styled.div`
  h5 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--default);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--tertiary-inverse);
  }
`;
