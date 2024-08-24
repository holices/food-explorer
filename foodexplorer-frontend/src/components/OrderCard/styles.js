import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    
    width: 40rem;
    max-height: 48rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2rem;

    > .card {
        display: flex;
        align-self: flex-start;
        align-items: center;
        
        height: 10.4rem;
        gap: 1rem;
        overflow: auto;
    }

    img {
        width: 7.2rem;
        height: 7.2rem;
    }
`;

export const ResumeContainer = styled.span`
    strong {
        margin-right: 1.2rem;
    }

    span {
        margin-left: 1.2rem;
        font-weight: 500;
        font-size: 2rem;
    }
`