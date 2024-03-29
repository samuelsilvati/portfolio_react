import Cards from '../../components/Cards/Cards';
import Container from './styles';

export default function Portfolio() {
  return (
    <Container>
      <section id="portfolio" className="section-grey">
        <div className="container">
          <h1 className="section-title text-blue">Portfólio</h1>
          <div className="section-container">
            <Cards />
          </div>
        </div>
      </section>
    </Container>
  );
}
