import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  padding-top: 76px;
  font-family: 'Lato', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
}

h1,
h2,
h3,
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

.contactModal {
  /* border: 1px solid red; */
  padding: 0;
}

.outlineButton {
  transition: all 0.3s ease;
}

.outlineButton i {
  transition: all 0.3s ease;
}

.outlineButton:hover {
  border-color: #30c56d !important;
}

.outlineButton:hover i {
  color: #30c56d !important;
}


`;
