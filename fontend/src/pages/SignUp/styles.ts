import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Content = styled.div`
    width: 600px;
    height: 400px;
    background: #fff;
    border-radius: 25px;

    header {
        display: flex;
        background: transparent;
        height: 52px;
        border-bottom: 1px solid #e6ecf0;

        button {
            background: transparent;
            border: 0;
            color: #1da1f2;
            margin-left: -240px;
            margin-top: -20px;
        }
        p {
            display: flex;
            font-size: 19px;
            font-weight: 500;
            padding-left: 10px;
            padding-top: 10px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 25px 20px 0 20px;

        label {
            background: #f5f8fa;
            font-size: 15px;
            color: #1da1f2;
            padding-top: 5px;
            padding-left: 10px;
            margin-top: 30px;
        }

        input {
            background: #f5f8fa;
            border: 0;
            font-size: 15px;
            color: #1da1f2;
            border-bottom: 2px solid #657786;
            padding: 0 5px 0 5px;
        }
        button {
            margin-top: 30px;
            border: 0;
            border-radius: 25px;
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            background: #8ed0f9;
            height: 48px;
            margin-bottom: 25px;
        }
        button a :hover {
            background: #1da1f2;
        }
    }
`;
