import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import map from '../images/Map.png'
import { useState } from 'react';
import Data from '../Data/Data.json';
import { useEffect } from 'react';

const Destination = () => {
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        setVehicle(Data);
    }, [])

    // const {id, image, typeVehicle} = vehicle;

    const showForm2 = () => {
        document.getElementById('form2').style.display="block";
        document.getElementById('form1').style.display="none"; 
            
        var text1  =  document.getElementById('form1From').value;
        document.getElementById('form2From').value = text1;

        var text2 = document.getElementById('form1To').value;
        document.getElementById('form2To').value = text2;
    }

    return (
        <div>
            <h1>This is destination</h1>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form id="form1">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control type="text" id="form1From"  />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control type="text" id="form1To" />
                            </Form.Group>
                            <Button onClick={showForm2} value="click" variant="primary" type="button">
                                Search
                            </Button>
                        </Form>

                        <Form id="form2" style={{display: 'none'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Destination From</Form.Label>
                                <Form.Control type="text" id="form2From"  />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Destination To</Form.Label>
                                <Form.Control type="text" id="form2To" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={8}>
                        <img src={map} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;