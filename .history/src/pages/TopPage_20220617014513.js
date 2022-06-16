import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
const TopPage = (props) => {
  return (
    <div>
      <Title />
      <SelectorbcountriesJson={props.countriesJson} setCountry= />
      <Results />
    </div>
  );
};

export default TopPage;
