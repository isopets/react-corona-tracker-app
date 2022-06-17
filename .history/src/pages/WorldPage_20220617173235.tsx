import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
interface SingleCountriesDataType {
  // 追加
  Country: string; // 追加
  NewConfirmed: number; // 追加
  TotalConfirmed: number; // 追加
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
