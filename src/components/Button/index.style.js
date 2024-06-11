import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  margin: 16px 0;
  cursor: pointer;
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: var(--primary-500);
  color: var(--primary-50);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  :hover {
    background-color: var(--secondary-400);
  }
`;
