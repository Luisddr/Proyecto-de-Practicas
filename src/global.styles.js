import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px 40px;
    background-color: white;

    @media screen and (max-width: 800px){
        padding: 10px;
    }
}

.dark-content{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px 40px;
    background-color: black;

    @media screen and (max-width: 800px){
        padding: 10px;
    }

}

a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}

`