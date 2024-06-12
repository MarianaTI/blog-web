import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 800px;
  height: 500px;
  background-color: var(--neutral);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 50px 0 rgba(0, 0, 0, 0.05);
`;

export const FormContainer = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 22px;
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
`;
