import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map(country => (
          <option>{country.}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
