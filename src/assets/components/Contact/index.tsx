import { Container } from "./styles";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <Container>
      <section id="contact" className="section-gray">
        <div className="container">
          <h1 className="section-title text-blue">Contato</h1>
          <div className="section-container">
            <a href="mailto:samuel7silva@outlook.com" target="_blank">
              <i>
                <FaEnvelope />
              </i>
              samuel7silva@outlook.com
            </a>
            <a href="https://github.com/samuelsilvati" target="_blank">
              <i>
                <FaGithub />
              </i>
              Github/samuelsilvati
            </a>
            <a href="https://www.linkedin.com/in/samuelsilvati" target="_blank">
              <i>
                <FaLinkedin />
              </i>
              linkedin.com/in/samuelsilvati/
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}