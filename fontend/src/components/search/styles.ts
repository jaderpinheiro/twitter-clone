import styled from 'styled-components';

// interface ContainerProps {
// /    isFocused: boolean;
//   isFilled: boolean;
//   isErrored: boolean;
// }

export const Container = styled.div`
    background: #e6ecf0;
    border-radius: 50px;
    border: none;
    padding: 0 60px;
    display: flex;
    height: 40px;
    align-items: center;
    margin-top: 8px;

    input {
        background: #e6ecf0;
        font-size: 17px;
        flex: 1;
        border: 0;
        display: flex;
        height: 40px;
        margin-left: 15px;
    }
    svg {
        color: #afafaf;
    }
`;
