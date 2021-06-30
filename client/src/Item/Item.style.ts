import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;
    
    button{
    border-radius: 0 0 20px 20px;
    right: 0;
    }
    
    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 3rem;
        height: 100%;
        grid-template-columns: 1fr 1fr;
    }
`;