import styled from "@emotion/styled";

export const ModalContent = styled.div`
  position: absolute;
  max-height: auto;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;
  box-shadow: 24;
  padding: 8px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: var(--default);
  }
  & span {
    color: var(--tertiary);
    font-size: 12px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 24px;
  }
  @media (max-width: 320px) {
    width: 280px;
    padding: 16px 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    overflow-y: auto;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
`;
export const ModalMain = styled.div`
  padding: 16px 0 16px 0;
`;
