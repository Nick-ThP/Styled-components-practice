import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';

export const Button = styled(ButtonComponent)`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
        background-color: coral;
        // change another component with this components hover
        & label {
            color: green;
        }
    }
    &:active {
        background-color: gray;
    }
`;

export const NoCompButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
        background-color: coral;
        // change another component with this components hover
        & label {
            color: green;
        }
    }
    &:active {
        background-color: gray;
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`;

