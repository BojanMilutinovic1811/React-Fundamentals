import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather';


const api_key = '5035dda4cbdf555a48d8ccc9e30e2eb6'

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    console.log(data);

    if(city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      country: data.sys.country,
      description: data.weather[0].description
    })
  }
  else {
    this.setState({
      error: "Please insert correct values."
    })
  }
  }


  render() {

    const {temperature, city, humidity, country, description, error} = this.state;
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={temperature} city={city} humidity={humidity} country={country} description={description} error={error}/>
      </div>
    );
  }
}

export default App;
