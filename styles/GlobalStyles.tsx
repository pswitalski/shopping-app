import { css } from "@emotion/react";

const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body {
        background-color: #ededed;
    }
    #__next {
        min-height: 100vh;
    }
`
export default GlobalStyles;