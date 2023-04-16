import styled from "styled-components";

export const BackgroundWrapper = styled.section`
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
    width: 57%;
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
    width: 57%;
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
`;
