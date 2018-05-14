import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMaps from '../components/google_maps';
import Chart from '../components/chart';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import '../style/style.css';

class ShowDetails extends Component
{

    displayDetails(listitem)
    {
        return (
            <tr key={listitem.dt_txt}>
                <td>{listitem.dt_txt}</td>
                <td>{listitem.weather[0].description}</td>
                <td>{_.round(listitem.main.temp - 273)}</td>
                <td>{listitem.main.pressure}</td>
                <td>{listitem.main.humidity}</td>
                <td>{listitem.wind.speed}</td>
            </tr>
        );
    }
    render()
    {
        if(!this.props.data)
        {
            this.props.history.push("/");
            window.location.reload();
        }
        const data = this.props.data;
        const lat = data.city.coord.lat;
        const lon = data .city.coord.lon;

        const temps = data.list.map( weatherData => (weatherData.main.temp - 273) );
        const pressures = data.list.map( weatherData => weatherData.main.pressure );
        const humidity = data.list.map( weatherData => weatherData.main.humidity );
        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>{data.city.name},{data.city.country}</h1>
                <div>
                    <GoogleMaps lat={lat} lon={lon} height="500px"/>
                </div>
                <br />
                <div>
                    <h3 style={styles.heading}>Weather trends for the next 5 days</h3>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th> Temperature ( &deg;C ) </th>
                            <th> Pressure ( hPa ) </th>
                            <th> Humidity ( % ) </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                        <td><Chart color="red" data={temps} unit="&deg;C"/></td>
                        <td><Chart color="blue" data={pressures} unit="hPa" /></td>
                        <td><Chart color="green" data={humidity} unit="%" /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h3 style={styles.heading}>Full detail forecast according to date and time :</h3>
                <div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th> Date &amp; time </th>
                        <th> Weather </th>
                        <th> Temperature ( &deg;C ) </th>
                        <th> Pressure ( hPa ) </th>
                        <th> Humidity ( % ) </th>
                        <th> Wind Speed ( Mph )</th>
                    </tr>
                    </thead>

                    <tbody>
                        {this.props.data.list.map( this.displayDetails )}
                    </tbody>
                </table>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return { data: state.selectedCity };
}

export default withRouter(connect(mapStateToProps)(ShowDetails));

const styles={
    heading:{
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontFamily: 'Nunito',
    },
    container:{
        margin:40
    }
  }
  