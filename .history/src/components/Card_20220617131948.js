import {useState} from "react";
const Card = () => {
  const getAllCountriesData = () => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => console.log(data.Countries));
  };
  return (
    <div>
      {console.log(allCountriesData)}
      <h2>Card</h2>
      <button onClick={getAllCountriesData}>Get All Data</button>
    </div>
  );
};

export default Card;
