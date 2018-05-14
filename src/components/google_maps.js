import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component
{
    render()
    {
        return (
        <div style={{width: '100%', height: this.props.height }} >
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDkLSQnUWS0Qge_qTkBT_qQq_0ZQdbmK6A"}}
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