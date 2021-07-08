import styled from 'styled-components';
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    padding: 0.5rem
    margin: 40px;
    justify-content: center;
    align-content: center;
    background-color:white;
`;

export const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100rem;
    padding: 0.5rem
    margin: 40px;
    justify-content: flex-end;
    align-content: center;
`;

export const StyledButton = styled(IconButton)`
  position: fixed
  z-index: 100;
  top: 20px;
  left: 20px;
  color: #9042f5;
`;
