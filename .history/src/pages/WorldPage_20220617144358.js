import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const WorldPage = ({allCountriesData}) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;
