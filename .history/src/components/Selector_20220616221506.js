import countriesJson from "../countries.json";
const Selector = () => {
  console.log(countriesJson);
  countriesJson.map
  return (
    <div>
      <select>
        <option>United States</option>
        <option>China</option>
        <option>Japan</option>
      </select>
    </div>
  );
};

export default Selector;
