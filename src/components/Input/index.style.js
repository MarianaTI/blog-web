import styled from "@emotion/styled";

export const Label = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: var(--secondary);
  margin: 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 40px;
  border-radius: 10px;
  background-color: #eee;
  border: none;
  margin: 8px 0;
  color: var(--default);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  caret-color: var(--primary-500);
  &:focus {
    padding: 12px;
    outline: none;
    color: var(--default);
  }
  &:not(:focus) {
    padding: 12px;
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 55%;
  transform: translateY(-48%);
  font-size: 20px;
  cursor: pointer;
  color: var(--tertiary-inverse);
`;
