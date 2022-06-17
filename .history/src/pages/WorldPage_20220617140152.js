import Card from "../components/Card";

const WorldPage = (props) => {
    return (
        <div>
            <Card allCountriesData={props.allCountriesData} />  // 修正
        </div>
    );
};

export default WorldPage;