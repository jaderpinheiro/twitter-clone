import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 597px;
    height: 200px;
    margin-top: 2px;
    margin-left: 1px;

    label {
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
        img {
            background: #000;
        }
        input {
            display: none;
        }
    }
`;
