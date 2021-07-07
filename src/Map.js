import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import ROUTE from './route'

const containerStyle = {
    width: '600px',
    height: '400px'
};

const API_KEY = '';

function Map() {
    const [selected, setSelected] = useState(false);

    const handleMarkerClick = () => {
        setSelected(prev => !prev);
    };


    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
            language={'en'}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={ROUTE.current} zoom={12}>
                <Marker position={ROUTE.current} onClick={handleMarkerClick}>
                    {selected && <InfoWindow position={ROUTE.current}>
                        <div style={{color: 'black'}}>Stark Tower
                        </div>
                    </InfoWindow>
                    }
                </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)