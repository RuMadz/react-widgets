import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *,
 *::after,
 *::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
    ${(props) => props.theme.media.mobile}{
        font-size: 11px;
    } 
}

body {
    background-color: ${(props) => props.theme.colors.primary};
    font-family: Noto Sans KR, sans-serif;
    color: ${(props) => props.theme.colors.secondary};
         margin: 50px;
     margin-bottom: 0px;
     margin-left: 0px;
     place-items: center;
}


 :root {


     --txt: #010101;
     --txt-light: #fdfdfd;
     --light-body: rgb(253, 253, 253);
     --light-grey: #f1f1f1;
     --dark-body: #000;
     --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     --font-family: 'Poppins', sans-serif;
     --hue: 260;
 }



`;
