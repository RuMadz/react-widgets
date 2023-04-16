import styled from "styled-components";
import "../../styles/Theme.styles";

export const HomeWrapper = styled.section`
  :root {
    --txt: #010101;
    --txt-light: #fdfdfd;
    --light-body: rgb(253, 253, 253);
    --light-grey: #f1f1f1;
    --dark-body: #000;
    --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    --font-family: "Poppins", sans-serif;
    --hue: 260;
    --mouseX: 50;
    --mouseY: 50;
  }
  .text_color {
    color: ${(props) => props.theme.colors.purple};
  }
  .words-con {
    position: absolute;
    top: 30%;

    height: 150px;
    text-align: center;
    margin: 0 300px;
    display: flex;
  }

  .title {
    font-size: 8rem;
    width: fit-content;
  }

  .c-phrase {
    font-weight: 500;
    font-size: 100px;
    text-align: center;
    transform: translateY(100%);
    z-index: 0;
  }

  .pick {
    animation: bounce 1s ease-in-out 0s infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
      text-shadow: 0px 2px 3px #acada9, 0px 1px 1px #716e6e;
    }

    10% {
      transform: translateY(0);
      text-shadow: 0px 2px 3px #acada9, 0px 1px 1px #716e6e;
    }

    50% {
      transform: translateY(-20px);
      text-shadow: 0px 20px 10px #acada9, 0px 1px 1px #716e6e,
        0px 2px 1px #716e6e, 0px 3px 1px #716e6e;
    }

    60% {
      transform: translateY(-20px);
      text-shadow: 0px 20px 10px #acada9, 0px 1px 1px #716e6e,
        0px 2px 1px #716e6e, 0px 3px 1px #716e6e;
    }

    100% {
      transform: translateY(0);
      text-shadow: 0px 2px 3px #acada9, 0px 1px 1px #716e6e;
    }
  }

  .cc-text {
    animation: Color 10s linear infinite;
    -webkit-animation: Color 10s ease-in-out infinite;
  }

  @keyframes Color {
    0% {
      color: #d14081;
    }

    20% {
      color: #3600c0;
    }

    40% {
      color: #51e5ff;
    }

    60% {
      color: #d14081;
    }

    80% {
      color: #3600c0;
    }

    100% {
      color: #51e5ff;
    }
  }

  @-moz-keyframes Color {
    0% {
      color: #d14081;
    }

    20% {
      color: #3600c0;
    }

    40% {
      color: #51e5ff;
    }

    60% {
      color: #d14081;
    }

    80% {
      color: #3600c0;
    }

    100% {
      color: #51e5ff;
    }
  }

  @-webkit-keyframes Color {
    0% {
      color: #d14081;
    }

    20% {
      color: #3600c0;
    }

    40% {
      color: #51e5ff;
    }

    60% {
      color: #d14081;
    }

    80% {
      color: #3600c0;
    }

    100% {
      color: #51e5ff;
    }
  }

  .sink {
    background-color: #565656;
    color: transparent;
    text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
  .time_wrapper {
    position: relative;
  }

  #time {
    text-shadow: 0 0 40px #3bac2c;
    --shadow: hsl(var(--hue) 40% 60%);
    text-shadow: inset 0 0 10px var(--shadow);
    font-size: 5rem;
  }

  #sec {
    position: absolute;
    bottom: 40px;
    font-size: 1rem;
  }

  #mid {
    position: absolute;
    top: 35px;
    right: 40%;

    font-size: 2rem;
  }

  .day_wrapper {
    display: flex;
    position: relative;
    left: 20px;
    justify-content: space-between;
    width: 50%;
  }

  .day_wrapper span {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.3;
  }

  #showDate {
    position: relative;
    left: 20px;
    font-size: 2rem;
  }
  .time_wrapper {
    position: relative;
  }

  #time {
    text-shadow: 0 0 40px #3bac2c;
    --shadow: hsl(var(--hue) 40% 60%);
    text-shadow: inset 0 0 10px var(--shadow);
    font-size: 5rem;
  }

  #sec {
    position: absolute;
    bottom: 40px;
    font-size: 1rem;
  }

  #mid {
    position: absolute;
    top: 35px;
    right: 40%;

    font-size: 2rem;
  }

  .day_wrapper {
    display: flex;
    position: relative;
    left: 20px;
    justify-content: space-between;
    width: 50%;
  }

  .day_wrapper span {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.3;
  }

  #showDate {
    position: relative;
    left: 20px;
    font-size: 2rem;
  }
  .move {
    padding-left: 150px;
  }
  .fade-box {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    top: 0;
  }

  .reveal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .fade-box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .reveal--front {
    position: absolute;
    top: 20%;
    padding-left: 550px;
    color: #8b70c3;
    width: 100vw;
  }

  .reveal__circle {
    position: absolute;
    top: -10em;
    left: -10em;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    mask-size: 150px;
    mask-position: calc(var(--mouseX) * 1px) calc(var(--mouseY) * 1px);
    -webkit-mask-size: 150px;
    -webkit-mask-position: calc(var(--mouseX) * 1px) calc(var(--mouseY) * 1px);
  }
`;
