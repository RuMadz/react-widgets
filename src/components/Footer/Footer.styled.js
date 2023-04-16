import styled from "styled-components";
import { ImCodepen } from "react-icons/im";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  li a {
    text-decoration: none;
  }

  .social {
    display: flex;
    position: absolute;
    bottom: 10%;
    padding-left: 250px;
    z-index: 1;
  }

  .social span {
    display: block;
    margin: 5px;
    width: 300px;
    text-align: right;
    padding: 10px;
    border-radius: 0 30px 30px 0;
    transition: all 1s;
    font-size: 20px;
  }

  .social span:hover {
    transform: translate(110px, 0);
    background: rgba(255, 255, 255, 0.4);
  }

  .social span:hover a {
    color: #000;
  }

  .social span:hover i {
    color: var(--dark-body);
    background: transparent;
    transform: rotate(360deg);
    transition: all 1s;
  }

  .social span i {
    color: #e0e4ea;
    padding: 10px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 20px;
    background: transparent;
    transform: rotate(0deg);
  }
`;
export const codepenIcon = styled(ImCodepen)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
export const instaIcon = styled(CiInstagram)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
export const githubIcon = styled(AiOutlineGithub)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
