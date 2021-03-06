import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";

class Rodeos extends Component {
  state = {
    rodeos: [],
    name: "",
    location: "",
    events: "",
    date: "",
    contact: ""
  };

  componentDidMount() {
    this.loadRodeos();
  }

  loadRodeos = () => {
    API.getRodeos()
      .then(res => 
        this.setState({ rodeos: res.data, name: "", location: "", events: "", date: "", contact: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
         <Nav />
        <Row>
           <Col size="md-6"> 
                {/* <Jumbotron>TEST
                </Jumbotron> */}
            <Jumbotron>
              <h1>Add a Rodeo to Our List</h1>
            </Jumbotron>
            <form>
              <Input name="name" placeholder="Name (required)" />
              <Input name="location" placeholder="Location (required)" />
              <Input name="date" placeholder="Date (required)" />
              <Input name="contact" placeholder="Contact (required)" />
              <Input name="events" placeholder="Events (required)" />
              <FormBtn>Submit Rodeo</FormBtn>
            </form>
           </Col> 
            <Col size="md-6">  
            <Card />
            <Jumbotron>
              <h1>Rodeos On My List</h1>
            </Jumbotron>
            {this.state.rodeos.length ? (
              <List>
                {this.state.rodeos.map(rodeo => {
                  return (
                    <ListItem key={rodeo._id}>
                      <a href={"/rodeos/" + rodeo._id}>
                        <strong>
                          {rodeo.name} in {rodeo.location} on {rodeo.date}
                        </strong>
                      </a>
                      <DeleteBtn />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
           </Col> 
        </Row>
        <img src={require('./cowboy.jpg')} className="img-responsive"/>
      </Container>
    );
  }
}

export default Rodeos;
