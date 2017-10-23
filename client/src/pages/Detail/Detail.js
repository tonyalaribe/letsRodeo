import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    rodeo: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getRodeo(this.props.match.params.id)
      .then(res => this.setState({ rodeo: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid style={{backgroundImage:"url()"}}>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.rodeo.name} in {this.state.rodeo.location} on {this.state.rodeo.date}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.rodeo.events}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Rodeos</Link>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Detail;
