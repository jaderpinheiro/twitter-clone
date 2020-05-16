import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;

    }

    body{
        background:#ffff;
        color:#000000;
        -webkit-font-smoothing: antialiased;
    }
    body , input , button{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
        font-size:12px;

    }
    button{
        cursor:pointer;
    }

    #root {
        max-width:1235px;
        margin:0 auto;

    }

`;
