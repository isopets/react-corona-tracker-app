import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}
            {index}
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
