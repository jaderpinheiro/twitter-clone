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
    background-color: #fff;
    color: #000000;
    width: 44%;
    height: 92%;
    border-radius: 15px;

    header {
        background: transparent;
        display: flex;
        height: 52px;
        border-bottom: 1px solid #e6ecf0;
        button {
            background: transparent;
            border: 0;
            color: #1da1f2;
            margin-left: 17px;
            display: flex;
        }
        p {
            display: flex;
            align-items: center;
            margin-left: 29px;
            font-size: 19px;
            font-weight: 700;
        }
        a {
            background: #1da1f2;
            border-radius: 50px;
            width: 74px;
            height: 30px;
            border: 0;
            justify-content: center;
            border-radius: 50px;
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            text-decoration: none;
            display: flex;
            margin-left: 332px;
            margin-top: 11px;

            b {
                display: flex;
                justify-content: center;
                margin-top: 5px;
            }
        }
    }

    body {
        margin-bottom: 80px;
    }

    form {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: scroll;
        position: absolute;
        z-index: 2;
        margin-left: 16px;
        margin-top: 10px;

        p {
            display: flex;
            background: #f5f8fa;
            color: #1da1f2;
            font-size: 15px;
            width: 550px;
            padding-top: 4px;
            padding-left: 10px;
        }
        input {
            display: flex;
            border: 0;
            background: #f5f8fa;
            border-bottom: 2px solid #afafaf;
            padding-left: 10px;
            z-index: 0;
        }
        button {
            background: #1da1f2;
            border-radius: 50px;
            width: 74px;
            height: 30px;
            border: 0;
            justify-content: center;
            border-radius: 50px;
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            text-decoration: none;
            display: flex;
            margin-left: 480px;
            margin-top: 11px;
        }
    }
`;
