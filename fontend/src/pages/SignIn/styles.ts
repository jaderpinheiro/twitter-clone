import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: transparent;

    svg {
        color: #1da1f2;
        margin-top: 21px;
        padding-left: 250px;
    }
    h1 {
        padding-top: 27px;
        padding-left: 175px;
        font-size: 23px;
    }
    form {
        display: flex;
        flex-direction: column;

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
            width: 550px;
            height: 30px;
            padding: 0 10px 0 10px;
        }
        button {
            margin-top: 15px;
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

    span {
        padding-left: 130px;
        font-size: 15px;
        color: #1da1f2;
    }
    strong {
        padding-left: 12px;
        font-size: 15px;
        color: #1da1f2;
    }
    a {
        text-decoration: none;
    }
`;
/** #f5f8fa   #8ed0f9 */
