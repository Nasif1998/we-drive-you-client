import React from 'react';
import { Link } from 'react-router-dom';

const Vehicles = (props) => {
    const {id, vehicle, image } = props.vehicle;

    const imageStyle = {
        width: '200px'
    }

    const vehicleStyle = {
        border: '1px solid purple',
        marginTop: '200px',
        marginBottom: '250px',
        // marginLeft: '10px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)'
    }
    return (
        <div>
            <div style={vehicleStyle}>
                <img style={imageStyle} src={image} alt="" />
                <h3>{vehicle}</h3>
                <br />
                <p> <Link to={`/destination/${id}`}>
                    <button style={{ backgroundColor: 'orange' }}>Select</button>
                </Link></p>
            </div>
        </div>
    );
};

export default Vehicles;