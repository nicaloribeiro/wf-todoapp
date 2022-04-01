import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --green-100: #40D9B8;
        --gray-100: #F2F2F2;
        --gray-200: #EEEEEE;
        --gray-400: #CCCCCC;
        --gray-500: #909090;
        --gray-600: #606060;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: white;
    }

    button {
        cursor: pointer;
    }

`