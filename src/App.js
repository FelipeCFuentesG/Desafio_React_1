import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  return (
    <div>
      <div className="App">
        <Header titulo="Galería de Imagenes con React" />
        <Container className="container">
          <Row>
            <Col><Card imagen='https://placedog.net/401' descripcion='Los Perros son tela!' titulo='Perro 1' /></Col>
            <Col><Card imagen='https://placedog.net/402' descripcion='Los Perros son tela!' titulo='Perro 2' /></Col>
            <Col><Card imagen='https://placedog.net/403' descripcion='Los Perros son tela!' titulo='Perro 3' /></Col>
          </Row>
        </Container>
        <Container className="container">
          <Row>
            <Col><Card imagen='https://placedog.net/404' descripcion='Los Perros son tela!' titulo='Perro 4' /></Col>
            <Col><Card imagen='https://placedog.net/405' descripcion='Los Perros son tela!' titulo='Perro 5' /></Col>
            <Col><Card imagen='https://placedog.net/406' descripcion='Los Perros son tela!' titulo='Perro 6' /></Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  );
}

export default App;
