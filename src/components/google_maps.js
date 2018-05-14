import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component
{
    render()
    {
        return (
        <div style={{width: '100%', height: this.props.height }} >
            <GoogleMapReact
            defaultCenter={
                {
                    lat:this.props.lat,
                    lng:this.props.lon
                }
            }
            defaultZoom={12}
            >
            </GoogleMapReact>
        </div>
        );
    }
}