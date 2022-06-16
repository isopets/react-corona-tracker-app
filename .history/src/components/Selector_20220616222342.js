import countriesJson from "../countries.json";
const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map(country =>
            <option
            )}

      </select>
    </div>
  );
};

export default Selector;
