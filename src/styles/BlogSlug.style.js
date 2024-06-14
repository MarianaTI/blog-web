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
  height: 400px;
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const AutorInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  gap: 8px;
  & span:first-of-type {
    color: var(--default);
    font-weight: 600;
  }
  & span:last-child {
    color: var(--tertiary-inverse);
    font-weight: 500;
  }
`;

export const BlogInfoContent = styled.div`
  padding: 32px 0;
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
  padding: 40px 0;
  h5 {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--default);
    margin: 24px 8px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid var(--secondary-inverse);
  border-radius: 10px;
  background: var(--neutral);
  resize: none;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: var(--default);
  caret-color: var(--secondary-500);
  :focus {
    outline: none !important;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`;
