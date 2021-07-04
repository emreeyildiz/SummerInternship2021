import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
border-radius: 20px;
height: 100%;

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 3rem;
        height: 100%;
        grid-template-columns: 1fr 1fr;
    }
    
    h2 {
        text-align: center;
        color: #32a6a8;
        font-family: "Lucida Console", "Courier New", monospace;
        text-decoration: underline;
        
        
    }
    
    li {
        color: #0f3c54;
        margin-top: 20px;
    }
`;