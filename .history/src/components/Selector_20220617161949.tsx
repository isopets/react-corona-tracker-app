type SelectorType = {setCountry: React.Dispatch<React.SetStateAction<string>>,   // 追加
countriesJson: {            // 追加
    Country: string,        // 追加
    Slug: string,           // 追加
}[],              ,
 countriesJson};

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
    </div>
  );
};

export default Selector;
