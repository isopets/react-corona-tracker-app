const Card = () => {
  const getAllCountriesData = () => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <h2>Card</h2>
    </div>
  );
};

export default Card;
