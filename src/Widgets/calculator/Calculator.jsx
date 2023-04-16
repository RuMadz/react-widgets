import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import "./calculator.styled";
import { CalculatorWrapper } from "./calculator.styled";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentagem(e) {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <CalculatorWrapper>
      <div class="container-calc">
        <div class="grid-container">
          {/* <!-- COLOR SELECTOR --> */}
          <div class="grid-item-1">
            <div class="cs-container">
              <p>Pick a color</p>
              <div class="btn-container">
                <button class="dataColor" data-color="10"></button>
                <button class="dataColor" data-color="90"></button>
                <button class="dataColor" data-color="260"></button>
                <button class="dataColor" data-color="320"></button>
              </div>

              <div class="cl-container">
                <p>Copy link</p>
                <div class="cl-action">
                  <input type="text" />
                  <div class="copy-btn">
                    <span class="material-symbols-outlined">
                      {" "}
                      content_copy{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="return">
                <a href="/index.html">
                  <button class="custom-btn btn-1">Home</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Box m={5} />
        <Container maxWidth="xs">
          <div className="wrapper">
            <Box m={12} />
            <h1 className="resultado">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentagem}>%</button>
            <button className="orange" onClick={operatorHandler} value={"/"}>
              /
            </button>
            <button className="grey" onClick={inputNum} value={7}>
              7
            </button>
            <button className="grey" onClick={inputNum} value={8}>
              8
            </button>
            <button className="grey" onClick={inputNum} value={9}>
              9
            </button>
            <button className="orange" onClick={operatorHandler} value={"X"}>
              X
            </button>
            <button className="grey" onClick={inputNum} value={4}>
              4
            </button>
            <button className="grey" onClick={inputNum} value={5}>
              5
            </button>
            <button className="grey" onClick={inputNum} value={6}>
              6
            </button>
            <button className="orange" onClick={operatorHandler} value={"-"}>
              -
            </button>
            <button className="grey" onClick={inputNum} value={1}>
              1
            </button>
            <button className="grey" onClick={inputNum} value={2}>
              2
            </button>
            <button className="grey" onClick={inputNum} value={3}>
              3
            </button>
            <button className="orange" onClick={operatorHandler} value={"+"}>
              +
            </button>
            <button className="grey" onClick={inputNum} value={0}>
              0
            </button>
            <button style={{ visibility: "hidden" }}>k</button>{" "}
            {/* Esse componente serve apenas para preencher um espaço em branco e ficar escondido, não delete ele */}
            <button className="grey" onClick={inputNum} value={"."}>
              ,
            </button>
            <button className="orange" onClick={calculate}>
              =
            </button>
          </div>
        </Container>
      </section>
    </CalculatorWrapper>
  );
}
