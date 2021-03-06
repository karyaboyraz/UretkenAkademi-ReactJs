import React, { Component } from "react";
import { Label, Input, FormGroup, Form, Container, Row, Col, InputGroup, Button } from "reactstrap";
import Card from "./Card";
import "./Card.css";
const options = [
  {
    label: "Bulutlu",
    value: "Bulutlu",
  },
  {
    label: "Yağmurlu",
    value: "Yağmurlu",
  },
  {
    label: "Güneşli",
    value: "Güneşli",
  },
  {
    label: "Karlı",
    value: "Karlı",
  },
  {
    label: "Fırtına",
    value: "Fırtına",
  },
];

export default class inputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "Bulutlu",
      city: "City",
      country: "Country",
      celcius: "10",
      fahrenheit: "50",
      kelvin: "283.15",
      img: "url('https://media.istockphoto.com/vectors/blue-sky-and-clouds-seamless-vector-background-vector-id1163292935?k=20&m=1163292935&s=612x612&w=0&h=UkJc7uklb677HRh_Mn-5mrFM1cy4u8xJUxiYl4540eQ=')",
    };

    this.weatherChange = this.weatherChange.bind(this);
    this.tempratureChange = this.tempratureChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
  }

  weatherChange(e) {
    this.setState({ weather: e.target.value });
    if (e.target.value === "Karlı") {
      this.setState({ img: "url('https://i.pinimg.com/originals/e2/0a/1b/e20a1b24748abbb5d174c330a1d77fc3.jpg')" });
    } else if (e.target.value === "Güneşli") {
      this.setState({ img: "url('https://media.istockphoto.com/vectors/sky-background-with-sun-and-white-bottom-vector-id962117766?k=20&m=962117766&s=612x612&w=0&h=wYEiEtuwj7TJjrOnIg2RRBI-GePDT1U2IT59dsmcLdw=')" });
    } else if (e.target.value === "Bulutlu") {
      this.setState({ img: "url('https://media.istockphoto.com/vectors/blue-sky-and-clouds-seamless-vector-background-vector-id1163292935?k=20&m=1163292935&s=612x612&w=0&h=UkJc7uklb677HRh_Mn-5mrFM1cy4u8xJUxiYl4540eQ=')" });
    } else if (e.target.value === "Fırtına") {
      this.setState({ img: "url('https://media.istockphoto.com/vectors/lightning-with-cityscape-vector-illustration-vector-id1255420412?k=20&m=1255420412&s=612x612&w=0&h=Vm6jSBwfK07BtDAB2gmSV1i3j1dQqBCaTN_aqu4X4vw=')" });
    } else if (e.target.value === "Yağmurlu") {
      this.setState({ img: "url('https://media.istockphoto.com/vectors/background-night-sky-rain-clouds-layered-vector-vector-id1225901107?k=20&m=1225901107&s=612x612&w=0&h=rDdlAiFOrJJKQ69vaKxxqryoDOo9CkeXjx2lwovVb5Y=')" });
    }
  }
  tempratureChange(e) {
    this.setState({ celcius: e.target.value });
    let eInt = parseInt(e.target.value);
    let kelvin = eInt + 273.15;
    this.setState({ kelvin: kelvin });
    let fahrenheit = eInt * 1.8 + 32;
    this.setState({ fahrenheit: fahrenheit.toFixed(2) });
  }
  geoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude.toString();
        var lng = position.coords.longitude.toString();
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://us1.locationiq.com/v1/reverse.php?key=pk.8b243a9f03c3d625c33e050395d68a19&lat=" + lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
        function processRequest(e) {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var city = response.address.province;
            var country = response.address.town;
            document.getElementById("exampleCity").value = city
            document.getElementById("exampleCity").click()
            document.getElementById("exampleState").value = country
            document.getElementById("exampleState").click()
            return city;
          }
        }
      });
    } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
  }
  cityChange(e) {
    this.setState({ city: e.target.value });    
  }
  countryChange(e) {
    this.setState({ country: e.target.value });    
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <Container className="m-5">
              <Form>
                <FormGroup>
                  <Label for="exampleCity">Şehir</Label>
                  <InputGroup>
                    <Input onClick={this.cityChange} id="exampleCity"/>
                    <Button id="show" onClick={this.geoLocation}>
                      <span className="lnr lnr-location"></span>
                    </Button>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleState">İlçe</Label>
                  <Input onClick={this.countryChange} id="exampleState" name="state" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Hava Durumu</Label>
                  <Input onChange={this.weatherChange} id="weatherSelect" name="select" type="select">
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleHeat">Sıcaklık</Label>
                  <Input onChange={this.tempratureChange} type="number" id="exampleHeat" name="Heat" />
                </FormGroup>
              </Form>
            </Container>
          </Col>
          <Col md={8}>
            <Card info={this.state}></Card>
          </Col>
        </Row>
      </div>
    );
  }
}