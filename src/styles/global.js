import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        background: #3498db;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
    }
`;