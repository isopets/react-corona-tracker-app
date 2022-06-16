import "./App.css";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json";
import {useState} from "react";

function App() {
  const [country, setCountry] = useState("");

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <TopPage />
    </div>
  );
}

export default App;
