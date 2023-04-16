import styled from "styled-components";
import "../../utils/Widgets.display";

export const WidgetWrappper = styled.section`
  //   /* WIDGETS PAGE */

  .left-side {
    width: 30%;
  }

  .right-side {
    width: 70%;
  }

  .paw-page {
    padding: 20px;
    display: flex;
  }

  //   /* WIDGET GRIDS */
  .gi {
    display: grid;
    grid-template-rows: auto auto auto;
  }

  .pawp-gi:hover {
    border-radius: 30px;
  }

  .pawp-gi {
    border-radius: 30px;
  }

  .wi {
    display: flex;
    justify-content: center;
  }

  .wi img {
    height: 160px;

    margin-top: 20px;
  }

  .wt {
    width: 100%;
    height: 60px;
  }

  .wt p {
    font-size: 20px;
    margin: 10px;
    text-align: center;
    font-weight: 500;
    background-color: #5e37c1;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }

  a {
    text-decoration: none;
    color: var(--txt);
  }

  .w-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    border-width: 0;
    border-radius: 1em;
    font-size: 15px;
    width: 105px;
    height: 30px;
    -webkit-box-shadow: 2px 1px 30px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 2px 1px 30px 1px rgba(0, 0, 0, 0.25);
  }

  .btn-con {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-shine span {
    z-index: 20;

    font-size: 18px;
    background-color: #7156b5;
    color: transparent;
    text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }

  .btn-shine::before {
    position: absolute;
    content: "";
    width: 105px;
    height: 30px;
    border-radius: 1em;
    background-size: 100%;
    background: rgb(190, 190, 190);
    background: linear-gradient(
      -45deg,
      rgb(215, 215, 215) 0%,
      rgb(245, 245, 245) 17%,
      rgb(190, 190, 190) 24%,
      rgb(255, 255, 255) 40%,
      rgb(205, 205, 205) 50%,
      rgb(225, 225, 225) 59%,
      rgb(196, 196, 196) 70%,
      rgb(235, 235, 235) 85%,
      rgb(190, 190, 190) 100%
    );
    z-index: -1;
    animation: silver 5s infinite alternate ease-in-out;
  }

  @keyframes silver {
    0% {
      background-size: 100%;
      background-position: 50%;
    }

    50% {
      background-size: 500%;
      background-position: 0%;
    }

    100% {
      background-size: 200%;
      background-position: 100%;
    }
  }

  //   /* 2*2 GRID */
  .grid1 {
    display: grid;
    grid-template-columns: auto auto;
    height: 85vh;
  }

  .g1 {
    margin: 15px;
    margin-top: 0px;
    height: 370px;
    width: 270px;
  }

  .g1ic img {
    width: 50%;
    height: 90%;
  }

  //   /* widget container - yip */

  .box {
    position: relative;
    margin: 50px;
    padding: 15px;

    margin-top: 10px;
    margin-bottom: 0px;
  }

  .box .text {
    position: absolute;
    top: 65%;
    left: -120%;
    transform: translate(-25%, -50%);
    text-align: center;
    color: black;
    width: fit-content;
  }

  .box .text h2 {
    letter-spacing: 1px;
  }

  .box .text small {
    font-size: 18px;
    display: block;
  }

  .circle {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle .points {
    width: 3px;
    height: 15px;
    box-shadow: inset 1px 1px 2px 0 #2b2a2ad6;
    position: absolute;
    border-radius: 3px;
    transform: rotate(calc(var(--i) * var(--rot))) translateY(-100px);
  }

  .current-date {
    width: 190px;
  }

  .value {
    position: absolute;
    top: 25%;
    left: -50%;
    font-size: 50px;
    font-weight: 100;
  }

  h1 {
    font-size: small;
    font-weight: 300;
  }

  h4 {
    width: 190px;
    font-size: x-small;
  }

  .points.marked {
    animation: glow 0.04s linear forwards;
    animation-delay: calc(var(--i) * 0.05s);
  }

  //   /* widget container clock face */

  .clock {
    border-radius: 100%;
    background: #ffffff;
    font-family: "Montserrat";
    border: 5px solid white;
    box-shadow: inset 2px 3px 8px 0 #c604e0d6;
    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
    width: 230px;
    height: 230px;
  }

  .wrap {
    overflow: hidden;
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: 100%;
  }

  .minute,
  .hour {
    position: absolute;
    height: 100px;
    width: 6px;
    margin: auto;
    top: -27%;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .minute {
    position: absolute;
    height: 130px;
    width: 4px;
    top: -38%;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(90deg);
  }

  .second {
    position: absolute;
    height: 90px;
    width: 2px;
    margin: auto;
    top: -26%;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background: black;
    transform-origin: bottom center;
    transform: rotate(180deg);
    z-index: 1;
  }

  .dot {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: white;
    border: 2px solid #1b1b1b;
    border-radius: 100px;
    margin: auto;
    z-index: 1;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .clock {
    max-width: 500px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    background-image: url(https://www.freepngimg.com/thumb/clock/33735-6-clock-no-hands-clipart.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .bch {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgb(0, 0, 0);
    transform-origin: left;
    transform: rotate(-90deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }

  .sec {
    width: 37%;
    height: 2px;
    background-color: var(--shadow);
    box-shadow: 0 0 10px 0 rgba(123, 7, 7, 0.494);
  }

  .min {
    width: 30%;
    height: 5px;
  }

  .hr {
    width: 20%;
    height: 5px;
  }

  @keyframes glow {
    0% {
      background: #0007;
      box-shadow: none;
    }

    100% {
      --shadow: hsl(var(--hue) 40% 60%);
      box-shadow: 0 0 10px var(--shadow);
      background: var(--shadow);
    }
  }

  //   /* 1*2 GRID */

  .grid2 {
    display: grid;
    grid-template-columns: auto auto;
    width: 60vw;
    position: absolute;
    right: 3%;
  }

  .bc {
    margin-left: 15px;
  }

  .rs .gi {
    display: flex;
    justify-content: space-between;
  }

  .g2i img {
    height: 280px;
    width: 260px;
  }

  /* widget container - white calendar*/

  .calendar {
    background-color: white;
    border-radius: 25px;
    overflow: hidden;
    padding: 20px;
  }

  .calendar {
    font-family: "Quicksand", sans-serif;
    font-size: 12px;

    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
  }

  .calendar-header {
    border-radius: 10px;

    display: flex;

    align-items: center;

    padding: 10px;
  }

  .calendar-body {
    pad: 10px;
  }

  .calendar-week-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 600;
    cursor: pointer;
    color: rgb(104, 104, 104);
  }

  .calendar-week-days div:hover {
    color: black;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }

  .calendar-week-days div {
    display: grid;
    place-items: center;
    color: var(--bg-second);
    height: 50px;
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    color: var(--color-txt);
  }

  .calendar-days div {
    width: 37px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: relative;
    cursor: pointer;
    animation: to-top 1s forwards;
  }

  .month-picker {
    border-radius: 10px;
    cursor: pointer;
  }

  .month-picker:hover {
    background-color: var(--color-hover);
  }

  .month-picker:hover {
    color: var(--color-txt);
  }

  .year-picker {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .year-change {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0px 10px;
    cursor: pointer;
    visibility: hidden;
  }

  .year-change:hover {
    background-color: var(--light-btn);
    transition: all 0.2s ease-in-out;
    transform: scale(1.12);
  }

  .year-change:hover pre {
    color: var(--bg-body);
  }

  .calendar-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #year:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.2 ease-in-out;
  }

  .calendar-days div span {
    position: absolute;
  }

  .calendar-days div.current-date {
    --shadow: hsl(var(--hue) 40% 60%);
    box-shadow: inset 0 0 10px var(--shadow);
    border-radius: 20%;
  }

  .month-list {
    display: none;
  }

  //   /*  widget container - single calendar */

  .single-calendar {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 250px;
    border-radius: 25px;
    --shadow: hsl(var(--hue) 40% 60%);
    background-color: var(--shadow);
    box-shadow: 0 0 3px 2px #e4e7e68a;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    margin-right: 0;
  }

  .single-calendar div,
  .single-calendar span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .month-box {
    width: 100%;
  }

  .month {
    width: 100%;
    padding: 10px;
    font-size: 30px;
    border-radius: 25px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: #fff;
  }

  .date {
    width: 100%;
    padding: 10px;
    font-size: 90px;
    font-weight: 100;
    height: 100%;
    background-color: #fff;
    border-bottom-right-radius: 10%;
    border-bottom-left-radius: 10%;
  }

  //   /* 2*1 GRID */

  .grid3 {
    display: grid;
    grid-template-rows: auto auto;
    height: 40vh;
    width: 60vw;
    position: absolute;
    bottom: -75%;
    right: 3%;
  }

  .g3 {
    height: 200px;
    margin-bottom: 15px;
  }

  .g3i img {
    width: 60%;
  }

  //   /* digital clock */

  .miniTime {
    font-family: "Orbitron", sans-serif;
    width: 100%;
    width: 70%;
    margin-left: 135px;
  }

  .mini_text_color {
    --shadow: hsl(var(--hue) 40% 60%);
    background-color: var(--shadow);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .miniTime_wrapper {
    font-size: 30px;
  }

  .secs {
    font-size: 15px;
  }

  .miniDay_wrapper {
    font-size: 20px;
  }

  .miniShowDate {
    font-size: 20px !important;
    left: 0px !important;
  }

  .time {
    text-shadow: 0 0 40px #3bac2c;
    --shadow: hsl(var(--hue) 40% 60%);
    text-shadow: inset 0 0 10px var(--shadow);
    font-size: 5rem;
  }

  .sec {
    position: absolute;
    bottom: 40px;
    font-size: 1rem;
  }

  .mid {
    position: absolute;
    top: 35px;
    right: 40%;

    font-size: 2rem;
  }

  .showDate {
    position: relative;
    left: 20px;
    font-size: 2rem;
  }

  .mini_day_wrapper span {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.3;
  }
`;
