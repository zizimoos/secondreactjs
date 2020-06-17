import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing: border-box;
}
body{
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    background-color:rgba(220,220,220,1);
    color:rgba(40,40,40,1);
    padding-top:50px;
}
`;

export default GlobalStyles;
