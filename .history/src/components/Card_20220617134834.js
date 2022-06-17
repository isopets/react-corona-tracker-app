const Card = () => {
    return (
        <div>
            <h2>Card</h2>
            <button onClick={getAllCountriesData}>Get All Data</button>
            {allCountriesData.map((singleData, index) =>
              <div key={index}>
                <h2>{singleData.Country}</h2>
                <p>新規感染者: {singleData.NewConfirmed}</p>
                <p>感染者総数: {singleData.TotalConfirmed}</p>
              </div>
            )}
        </div>
    );
};

export default Card;
次に、Card.jsでは依然としてgetAllCountriesDataとallCountriesDataが必要なので、App.jsから渡してあげる必要があります。ここで使うのは前章でも登場したpropsです。次のコードを追加します。

// App.js

...

  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} />
            </Route>
            <Route exact path="/world">
                <WorldPage getAllCountriesData={getAllCountriesData} allCountriesData={allCountriesData} />   // 追加
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
WorldPage.jsを開き、次のコードを追加します。

// WorldPage.js