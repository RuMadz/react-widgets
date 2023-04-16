import styled from "styled-components";

export const ContactWrapper = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-family: "Poppins", sans-serif;
  }

  a {
    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }
  a,
  a:hover {
    text-decoration: none !important;
  }

  .content {
    padding: 7rem 0;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
  }

  .form-control {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    background-color: ${(props) => props.theme.colors.primary};
  }
  .form-control:active,
  .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000;
  }

  .btn,
  .form-control {
    height: 55px;
  }

  form.border-right {
    padding-right: 6rem !important;
  }
  @media (max-width: 991.98px) {
    form.border-right {
      padding-right: 0 !important;
      border-right: none !important;
    }
  }

  label.error {
    font-size: 12px;
    color: red;
  }

  #message {
    resize: vertical;
  }

  #form-message-warning,
  #form-message-success {
    display: none;
  }

  #form-message-warning {
    color: #b90b0b;
  }

  #form-message-success {
    color: #55a44e;
    font-size: 18px;
    font-weight: bold;
  }
  .sub-btn {
    margin: 20px;
    margin-left: 0px;
    border: 1px solid;
    border-radius: 50px !important;
    border-color: ${(props) => props.theme.colors.purple};
  }

  .sub-btn:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }

  .submitting {
    float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-weight: bold;
    font-size: 12px;
  }
  sub-btn:hover,
  submitting,
  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    color: ${(props) => props.theme.colors.text};
  }

  svg {
    fill: ${(props) => props.theme.colors.purple};
  }
`;
