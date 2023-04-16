import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/Widget-logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => navigate("/")}
        onMouseEnter={() => "../../assets/Widget-logo-2.svg"}
      />
      <div className="btn  go-link" onClick={() => navigate("/widgets")}>
        Widgets
      </div>

      <div className="btn go-link" onClick={() => navigate("/contact")}>
        Contact Us
      </div>

      <span
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
