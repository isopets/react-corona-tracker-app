import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}
interface WorldPageType {                       // 追加
  allCountriesData: Array<SingleCountriesDataType>    // 追加
}               
const WorldPage = ({allCountriesData}) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
