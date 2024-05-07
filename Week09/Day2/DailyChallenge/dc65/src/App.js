import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);
  const Choice = ({ language, index }) => {
    const countUp = () => {
      // setLanguages(languages[0].votes = languages[0].votes+1);
      const newLanguages = [...languages];
      newLanguages[index].votes += 1;
      setLanguages(newLanguages);
    };

    return (
      <Container fluid className="language">
        <Row>
          <Col className="voteCount m-2">{language.votes}</Col>
          <Col className="languageName m-2">{language.name}</Col>
          <Col className="m-2">
            <Button variant="primary" onClick={countUp}>Click here</Button>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div>
      <h1>Vote your language!</h1>

      {languages.map((language, index) => (
        <Choice key={index} language={language} index={index} />
      ))}
    </div>
  );
}

export default App;
