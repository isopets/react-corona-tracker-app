import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map(country =>
            <option></option></option>
            )}

      </select>
    </div>
  );
};

export default Selector;
