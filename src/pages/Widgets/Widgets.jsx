import React from "react";
import { Container } from "../../styles/General.styles";
import { useNavigate } from "react-router-dom";

const Widgets = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ul>
        <li onClick={() => navigate("/calculator1")}>calculator</li>
      </ul>
    </Container>
  );
};

export default Widgets;
