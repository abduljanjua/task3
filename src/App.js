import img from "./images/vertical-img.jpg";
import "./App.scss";
import {
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import GuidForm from "./components/GuidForm";

function App() {
  return (
    <div className="main-content">
      <Container>
        <Row>
          <Col md={6} className="no-padding">
            <Col md={12} className="no-padding">
              <div className="box">
                  <GuidForm />
              </div>
            </Col>
            <Col md={6} className="no-padding">
              <p className="box padding-20">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
              </p>
            </Col>
          </Col>
          <Col md={6} className="no-padding d-none d-md-block">
            <Image src={img} className="img-fluid box" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
