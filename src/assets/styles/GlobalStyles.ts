import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 10px;
  font-family: "Montserrat", sans-serif;
  scroll-behavior: smooth;
  background-color: ${(props) => props.theme.backgroundColor};
}

a {
  text-decoration: none;
}

img,
a {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

p{
  font-size: 1.7rem;
  margin-top: 5px;
  line-height: 2.3rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  color: ${(props) => props.theme.gray};
  text-decoration: none;
}

/* Rollbar ============================================== */

body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: ${(props) => props.theme.backgroundColor};
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.backgroundColor};
}

body::-webkit-scrollbar-thumb:hover {
  background-color: ${(props) => props.theme.secondaryColorHover};
}

.height {
  height: 200vh;
}

/* Navigation ============================================== */
.social-links {
  font-size: 2.8rem;
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  font-size: 3rem;
  color: ${(props) => props.theme.secondaryColor};
  transition: 0.6s;
}

.social-links a:hover {
  color: ${(props) => props.theme.secondaryColorHover};
}

/* Container ============================================== */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-container {
  max-width: 1100px;
}

.section-blue {
  padding-bottom: 10rem;
  background-image: ${(props) => props.theme.linearGradient};
}

.section-gray {
  padding-bottom: 10rem;
  background-color: ${(props) => props.theme.gray};
}

.section-title {
  padding: 10rem;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
}

.text-white {
  color: ${(props) => props.theme.aliceBlue};
}

.text-blue {
  color: ${(props) => props.theme.primaryColor};
}

`;
