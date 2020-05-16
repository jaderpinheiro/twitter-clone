import styled from 'styled-components';

export const Container = styled.div`
    background:#000;
    display: flex;
    background: #8ed0f9;
    width: 115px;
    height: 115px;
    border-radius: 100px;
    border: 5px solid #fff;
    margin-top: -49px;
    margin-left: 15px;
    position: absolute;
    z-index: 100;

    label {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
        img {
            background: #000;
            width: 115px;
            height: 115px;
            border-radius: 100px;
        }
        input {
            display: none;
        }
    }
`;
