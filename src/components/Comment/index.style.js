import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    h1{
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: var(--default);
    }
    p{
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: var(--default);
    }
`;

export const Info = styled.section`
    display: flex;
    gap: 48px;
    span{
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: var(--tertiary-inverse);
    }
`;