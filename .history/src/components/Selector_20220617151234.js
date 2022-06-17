const Selector = ({setCountry, countriesJson}) => {
  return (
    <div className="selector-container">
      <select onChange={e => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;