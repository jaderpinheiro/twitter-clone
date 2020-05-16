import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;
export const Sidebar = styled.div`
    background: transparent;
    display: flex;
    width: 251px;
    height: 100vh;

    ul {
        list-style: none;
        margin-top: 14px;
        font-weight: 700;

        a :hover {
            background: #e8f5fe;

            svg {
                color: #1da1f2;
            }
        }

        li {
            display: flex;
            margin-bottom: 20px;

            svg {
                padding-right: 20px;
                font-size: 30px;
            }

            span {
                color: #000;
                font-size: 19px;
                padding: 7px;
                background: transparent;
                border-radius: 50px;
            }
        }
    }
    button {
        background: #1da1f2;
        border-radius: 50px;
        width: 200px;
        height: 50px;
        border: 0;
        justify-content: center;
        border-radius: 50px;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
    }
    footer {
        background: transparent;
        border-radius: 50px;
        width: 200px;
        height: 50px;
        margin-top: 18px;
        padding: 10px;

        a {
            display: flex;
            justify-content: space-between;
            margin: 0 2px 0 2px;

            img {
                border-radius: 50px;
                margin-right: 10px;
                width: 45px;
                height: 45px;

                &:hover {
                    opacity: 0.7;
                }
            }
            span strong,
            p {
                font-size: 15px;
            }
        }
        i {
            size: 200px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    background: transparent;
`;

export const Context = styled.div`
    width: 598px;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;

    header {
        width: 600px;
        height: 53px;
        border-bottom: 1px solid #e6ecf0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 19px;
            display: flex;
            font-weight: 700;
            margin: 0 0 0 15px;
        }
        i {
            display: flex;
            background: transparent;

            svg {
                color: #1da1f2;
            }
            button {
                border: 0;
                background: transparent;
                padding: 15px;
            }
            button :hover {
                background: #e8f5fe;
                display: flex;
                border-radius: 50px;
            }
        }
    }

    body {
        display: flex;
        background: transparent;
        width: 600px;
        font-size: 15px;
        border-bottom: 10px solid #e6ecf0;

        img {
            border-radius: 50px;
            width: 50px;
            height: 50px;
            margin: 10px 15px 0px 15px;
            opacity: 1;
            animation-name: fadeInOpacity;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 1s;
        }

        @keyframes fadeInOpacity {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        a:hover {
            opacity: 0.7;
        }
    }

    textarea {
        resize: none;
        color: #1da1f2;
        border: 0;
        width: 500px;

        margin-top: 28px;
        font-size: 19px;
        color: #000;
        overflow-y: auto;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
            background: transparent;
            display: flex;
            align-items: center;

            h1,
            h2,
            h3,
            h4,
            h5 {
                margin-left: 10px;
            }
            svg {
                color: #1da1f2;
            }
            h1 {
                background: transparent;
                display: flex;
                margin-top: 1px;
                border: 4px;

                a:hover {
                    background: #e6ecf0;
                    border-radius: 50px;
                }
            }
            h2 {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #1da1f2;
                width: 17px;
                height: 17px;
            }
            h3 {
                transform: rotate(90deg);
            }
        }
        button {
            background: #8ed0f9;
            border-radius: 50px;
            padding: 10px 15px 10px 15px;
            border: 0;
            font-size: 15px;
            font-weight: 700;
            color: #d3edfd;
            margin-bottom: 10px;
        }
        button:hover {
            background: #1da1f2;
            display: flex;
        }
    }

    footer {
        font-weight: 400;
        font-size: 16px;
        font-style: normal;
        border-bottom: 1px solid #d3edfd;

        header {
            display: flex;
            justify-content: left;
            flex-direction: row;
            background: transparent;
            height: 100%;
            width: 580px;
            margin: 5px 10px 10px 10px;
            border: 0;
            a {
                display: flex;
                img {
                    display: flex;
                    justify-content: left;
                    border-radius: 50px;
                    width: 50px;
                    height: 50px;
                }
            }

            h4 {
                display: flex;
                margin-top: -21px;
                margin-left: 12px;
                margin-right: 18%;

                b {
                    margin-right: 4px;
                }

                span {
                    margin-right: 4px;
                    font-weight: 400;
                    color: #afafaf;
                }

                strong {
                    margin-right: 4px;
                    font-weight: 400;
                    color: #afafaf;
                }
            }

            i {
                display: flex;
                margin-top: -15px;

                svg {
                    color: #afafaf;
                }
            }
        }

        p {
            display: flex;
            margin-left: 75px;
            margin-top: -30px;
            margin-right: 15px;
        }
        b {
            display: flex;
            svg {
                margin-left: 75px;
                margin-top: 10px;
                margin-bottom: 10px;
                color: #afafaf;
            }
        }
    }
`;
export const Menu = styled.div`
    display: flex;
    background: transparent;
    flex-direction: column;
    margin-left: 30px;

    header {
        background: #f5f8fa;
        width: 350px;
        height: 500px;
        border-radius: 20px;
        margin-top: 10px;

        p {
            background: transparent;
            color: #000000;
            font-size: 20px;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #d3edfd;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        span {
            display: flex;
            padding-left: 20px;
            padding-top: 10px;
            font-size: 14px;
            color: #afafaf;
        }

        strong {
            display: flex;
            padding-left: 20px;
            font-size: 15px;
        }

        h1 {
            display: flex;
            padding-left: 20px;
            font-size: 15px;
            font-weight: 500;
            color: #afafaf;
            padding-bottom: 10px;
            border-bottom: 1px solid #d3edfd;
        }
        a {
            text-decoration: none;
        }
    }
`;
