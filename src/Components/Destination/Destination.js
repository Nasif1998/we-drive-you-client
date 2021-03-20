import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import map from '../images/Map.png'
import people from '../images/peopleicon.png'
import { useState } from 'react';
import Data from '../Data/Data.json';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import App from '../../App';


const Destination = () => {
    let { id } = useParams();
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        setVehicle(Data[id - 1]);
    }, [id])

    const newId = vehicle.id;
    console.log(newId);

    const { image, typeVehicle } = vehicle;

    const showForm2 = () => {
        document.getElementById('form2').style.display = "block";
        document.getElementById('form1').style.display = "none";

        var text1 = document.getElementById('form1From').value;
        document.getElementById('form2From').value = text1;

        var text2 = document.getElementById('form1To').value;
        document.getElementById('form2To').value = text2;
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form id="form1">
                            <Form.Group>
                                <Form.Label>Pick From</Form.Label>
                                <input type="text" id="form1From" required></input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control type="text" id="form1To" required />
                            </Form.Group>
                            <Button onClick={showForm2} value="click" variant="primary" type="button">
                                Search
                            </Button>
                        </Form>

                        <div id="form2" style={{ display: 'none' }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Destination From</Form.Label>
                                    <Form.Control type="text" id="form2From" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Destination To</Form.Label>
                                    <Form.Control type="text" id="form2To" />
                                </Form.Group>
                            </Form>
                            {
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '20px' }}>
                                    <img src={image} alt="" style={{ width: '80px', height: '50px' }} srcset="" />
                                    <h6>{typeVehicle}</h6>
                                    <img src={people} alt="" style={{ width: '25px', height: '25px' }} srcset="" />
                                    <h6>4</h6>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <h6>$67</h6>
                                </div>
                            }

                            {
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '20px' }}>
                                    <img src={image} alt="" style={{ width: '80px', height: '50px' }} srcset="" />
                                    <h6>{typeVehicle}</h6>
                                    <img src={people} alt="" style={{ width: '25px', height: '25px' }} srcset="" />
                                    <h6>4</h6>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <h6>$67</h6>
                                </div>
                            }

                            {
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                                    <img src={image} alt="" style={{ width: '80px', height: '50px' }} srcset="" />
                                    <h6>{typeVehicle}</h6>
                                    <img src={people} alt="" style={{ width: '25px', height: '25px' }} srcset="" />
                                    <h6>4</h6>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <h6>$67</h6>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col sm={8}>
                        <img src={map} alt="" srcset="" />
                        {/* <Map google={this.props.google} zoom={14}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                                
                            </InfoWindow>
                        </Map> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCZQdWZWsNykL30EbvVherj04c9HcqFc8")
//   // eslint-disable-next-line no-undef
//   })(App)