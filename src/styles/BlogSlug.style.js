import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 16px 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 550px;
  height: 400px;
  margin: 56px 0;
  justify-content: center;
`;

export const Info = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin: 0;
    margin-bottom: 16px;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--default);
  }
  h3 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--tertiary);
    width: 600px;
  }
`;

export const AutorInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  gap: 8px;
  & span:first-child {
    color: var(--default);
    font-weight: 600;
  }
  & span:last-child {
    color: var(--tertiary-inverse);
    font-weight: 500;
  }
`;

export const BlogInfoContent = styled.div`
  padding-top: 24px;
  p {
    color: var(--default);
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    white-space: pre-line;
    line-height: 1.5;
  }
`;

export const Comments = styled.section`
    background-color: aliceblue;
`;