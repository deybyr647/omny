import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import styles from "../styles/Home.module.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const LandingPageContent = () => {
  return (
      <Container>
        <Row>
          <Col>
              <Jumbotron className={"d-flex flex-column align-items-center text-center bg-dark text-white"}>
                  <Image src={"https://omny.info/media-library/OMNY-Map-Mobile-Header.png"}
                         alt={"OMNY-Map"}
                         className={"w-75 shadow-lg"}
                         rounded
                  />
                  <h4 className={"mt-3"}>Welcome To OMNY-Tracer</h4>
                  <p>A simple tool designed to help you keep track of your Metrocard use...</p>
              </Jumbotron>
          </Col>
        </Row>
      </Container>
  )
}

const LandingPage = () => (
    <>
        <Navigation/>
        <LandingPageContent/>
        <Footer/>
    </>
)

export default LandingPage;