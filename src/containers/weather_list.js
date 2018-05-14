import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';
import { selectWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

class WeatherList extends Component
{
    display(data)
    {
        const name = data.city.name;
        const temps = data.list.map( weatherData => (weatherData.main.temp - 273) );
        const pressures = data.list.map( weatherData => weatherData.main.pressure );
        const humidity = data.list.map( weatherData => weatherData.main.humidity );
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;

        return (
            <tr key={name} onClick= {()=> {
                console.log(data);
                this.props.selectWeather(data);
                this.props.history.push('/details');
            } } >
                <td style={{ width: 400 }}><GoogleMap lat={lat} lon={lon} height="200px" /></td>
                <td><Chart color="red" data={temps} unit="&deg;C"/></td>
                <td><Chart color="blue" data={pressures} unit="hPa" /></td>
                <td><Chart color="green" data={humidity} unit="%" /></td>
            </tr>
        );        
    }

    render()
    {
        return(
            <table className="table table-hover">
            <thead>
                <tr>
                    <th> City Map </th>
                    <th> Temperature ( &deg;C ) </th>
                    <th> Pressure ( hPa ) </th>
                    <th> Humidity ( % ) </th>
                </tr>
            </thead>

            <tbody>
                {this.props.weather.map( this.display.bind(this) )}
            </tbody>
            </table>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ selectWeather: selectWeather }, dispatch);
}

function mapStateToProps(state)
{
    return {weather: state.weather};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeatherList));