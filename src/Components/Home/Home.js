import React from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.css";
import Data from '../Data/Data.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(Data);
    }, [])
    return (
        <div className="banner"> 
           <Container>
               <Row>
               {
                        vehicles.map(vehicle =>(
                            <Col xs={12} md={3}>
                            <Vehicles vehicle={vehicle}></Vehicles>
                            </Col>
                            ))
                    }
               </Row>
           </Container>
        </div>
    );
};

export default Home;