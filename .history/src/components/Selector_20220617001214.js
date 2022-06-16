import countriesJson from "../countries.json";
import {useState} from "react";
const Selector = () => {
  const [country, setCountry] = useState("");
  const getCountryData = () 
  return (
    <div>
      <select onChange={e => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      {country}
    </div>
  );
};

export default Selector;
