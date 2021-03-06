import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map((country, index) => (
          <option key={index} value=
            {index}
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
