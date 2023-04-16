import styled from "styled-components";
import "../../styles/Theme.styles";

export const CalculatorWrapper = styled.section`
  button {
    width: 3em;
    height: 3em;
    font-size: 1.5em;
    border: none;
    border-radius: 2em;
    margin: 0.3em;
  }

  button:hover {
    cursor: pointer;
  }

  .wrapper {
    background-color: black;
    border-radius: 1em;
    padding: 1em;
  }

  .orange {
    background-color: #ff9500;
    color: white;
  }

  .grey {
    background-color: #505050;
    color: white;
  }

  .resultado {
    color: white;
    display: flex;
    justify-content: flex-end; /* Ou 'right' = o resultado seria o mesmo */
    margin-right: 1em;
    font-size: 3.5em;
  }
  /* GLOBAL */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap");

  body {
    background: #f1f1f1;
    padding-top: 100px;
    padding-left: 100px;
    font-family: "Poppins", sans-serif;
  }

  :root {
    --hue: 220;
  }

  .container-calc {
    margin: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  /* GRID CONTAINER */
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    height: 88vh;
    width: 100vw;
  }

  /* GRID 1 - COLOR SELECTION */
  .copy-btn {
    height: 40px;
    width: 40px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff;
    cursor: pointer;
    margin-left: 10px;
  }

  .copy-btn:hover {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 4px 4px 8px #d9d9d9, inset -4px -4px 8px #ffffff;
  }

  .copy-btn span {
    padding: 5px;
    font-size: 30px;
  }

  .cl-action {
    width: 70%;

    display: flex;
    margin: 10px;
    align-items: center;
  }

  .cl-container {
    margin-bottom: 100px;
  }

  .cl-container input {
    width: 70%;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    box-shadow: 20px 20px 60px #c5c5c5, -20px -20px 60px #ffffff;
    transition: 0.3s;
  }

  .return {
    margin-left: 150px;
  }

  .custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .btn-1 {
    background: rgba(9, 90, 240, 0.5);
    background: linear-gradient(
      0deg,
      rgba(9, 44, 240, 0.502) 0%,
      rgba(5, 91, 240, 0.505) 100%
    );
    border: none;
  }

  .btn-1:before {
    height: 0%;
    width: 2px;
  }

  .btn-1:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }

  .btn-container {
    display: flex;
    gap: 4rem;
    margin-bottom: 50px;
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 100vmax;
    border: none;
    background-color: hsl(var(--hue) 60% 50%);
    transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:is(:hover, :focus-visible) {
    box-shadow: 0 0 0 5px var(--bkg), 0 0 0 12px hsl(var(--hue) 60% 50%);
  }

  [data-color="90"] {
    --hue: 90;
  }

  [data-color="10"] {
    --hue: 10;
  }

  [data-color="260"] {
    --hue: 260;
  }

  [data-color="320"] {
    --hue: 320;
  }

  /* GRID 2 - CALCULATOR CONTAINER */
  .calculator {
    width: 300px;
    background-color: #ecf0f3;
    padding: 15px;
    border-radius: 30px;

    box-shadow: inset 5px 5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, 0.16);

    display: grid;
    grid-template-columns: repeat(4, 68px);
  }

  .calculator input {
    grid-column: span 4;
    height: 70px;
    width: 260px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff,
      inset 5px 5px 12px rgba(0, 0, 0, 0.16);
    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
    border: none;
    border-radius: 30px;
    color: rgb(70, 70, 70);
    font-size: 50px;
    text-align: end;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 0px 15px;
  }

  .calc-btn {
    height: 48px;
    width: 48px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, 0.16);
    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
    border: none;
    border-radius: 50%;
    margin: 8px;
    font-size: 16px;
  }

  .calculator button:is(:hover, :focus-visible) {
    box-shadow: none;
  }

  .equal {
    width: 115px;
    border-radius: 40px;
    background-color: #ecf0f3;
    box-shadow: -5px -5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, 0.16);
    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
  }
`;
