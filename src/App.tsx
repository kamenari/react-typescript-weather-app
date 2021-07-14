import React, { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

type ResultsStateType = {
  country : string
  cityName : string
  temperture : string
  conditionText : string
  icon : string
}

function App() {
  const [city, setCity] = useState<String>();
  const [results, setResults] = useState<ResultsStateType>({
    country : " ",
    cityName : " ",
    temperture : " ",
    conditionText : " ",
    icon : " ",
  })
  const getWeather = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=646bbaa5147b4550b6a54047211007&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperture: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        setCity("");
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
