import "./App.css";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json";
import {useState} from "react";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length -1].Date,
          newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,
          totalConfirmed: data[data.length -1].Confirmed,
          newRecovered: data[data.length -1].Recovered - 
          totalRecovered: data[data.length -1].Recovered,
        });
      })
      .then(data => console.log(data.length - 1));
  };
  return (
    <div>
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
    </div>
  );
}

export default App;
