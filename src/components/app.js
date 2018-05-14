import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}> 5-Day WEATHER FORECAST </h1>
        <SearchBar />
        <br />
        <WeatherList />
      </div>
    );
  }
}

const styles={
  heading:{
    marginTop: 20,
    textAlign: "center",
    fontFamily: 'Nunito',
    color: '#138496'
  },
  container:{
      margin:40
  }
}