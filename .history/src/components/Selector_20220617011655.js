import countriesJson from "../countries.json";
import {useState} from "react";
const Selector = () => {
  const [country, setCountry] = useState("");
  const getCountryData = () => {
    fetch("https://api.covid19api.com/country/japan")
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <select onChange={e => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={get}></button>
    </div>
  );
};

export default Selector;
