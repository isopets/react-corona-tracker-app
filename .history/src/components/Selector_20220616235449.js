import countriesJson from "../countries.json";
import {useState} from "react";
const Selector = () => {
    const [country, setCountry] = useState
  return (
    <div>
      <select>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
