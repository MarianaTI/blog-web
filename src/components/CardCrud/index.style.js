import styled from "@emotion/styled";

export const CardStyled = styled.div`
  width: 220px;
  height: auto;
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
margin: 16px 0;
  h5 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--default);
  }
`;

export const ButtonContainer = styled.div`
  margin: 8px 4px;
  display: flex;
  justify-content: end;
  gap: 8px;
  button {
    cursor: pointer;
    border: none;
    padding: 4px 16px;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--default);
    border-radius: 10px;
    background: var(--primary-100);
    :hover {
        background: var(--primary-300);
    }
  }
`;
