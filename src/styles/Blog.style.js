import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 700px;
  text-align: center;
  margin: 10% 0 13% 0;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--secondary-700);
  }
  span {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--tertiary-inverse);
  }
  @media (max-width: 320px) {
    width: 250px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-left: 3%;
  margin-bottom: 10%;
  grid-gap: 80px;
  @media(max-width: 1600px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 1280px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    justify-content: center;
    margin-top: 32px;
    grid-template-columns: 1fr;
  }
`;
