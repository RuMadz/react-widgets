import styled from "styled-components";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  cursor: pointer;

  padding: 2rem;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
  .sink {
    background-color: #565656;
    color: transparent;
    text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
  .go-link {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const LightModeIcon = styled(FaToggleOff)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(FaToggleOn)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
