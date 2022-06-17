import {useState, useEffect} from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  
    useEffect(() => {});
  };
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage
            countriesJson={countriesJson}
            setCountry={setCountry}
            getCountryData={getCountryData}
            countryData={countryData}
          />
        </Route>
        <Route exact path="/world">
          <WorldPage allCountriesData={allCountriesData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
