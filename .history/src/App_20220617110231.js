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
          date:
          newConfirmed
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
