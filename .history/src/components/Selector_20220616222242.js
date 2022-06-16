import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map(country => console.log(country.Slug))}
        <option>United States</option>
        <option>China</option>
        <option>Japan</option>
      </select>
    </div>
  );
};

export default Selector;
