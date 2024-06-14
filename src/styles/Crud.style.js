import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 16px 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--secondary-700);
`;

export const Subtitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--tertiary-inverse);
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-left: 3%;
  margin-top: 80px;
  margin-bottom: 10%;
  grid-gap: 80px;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: end;
  }
`;
