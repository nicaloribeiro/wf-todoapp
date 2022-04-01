import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --green-100: #40D9B8;
        --gray-100: #F2F2F2;
        --gray-200: #EEEEEE;
        --gray-400: #CCCCCC
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
    }

    button {
        cursor: pointer;
    }

`