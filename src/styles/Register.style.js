import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-100);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    background-color: var(--neutral);
  }
`;

export const Content = styled.div`
  width: 800px;
  height: 530px;
  background-color: var(--neutral);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 50px 0 rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 430px;
  }
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    border-radius: none;
  }
`;

export const FormContainer = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 22px;
    margin: 0;
  }
  span {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--tertiary);
  }
  .register {
    color: var(--primary-500);
    margin-left: 5px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
