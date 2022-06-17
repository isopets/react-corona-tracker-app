const Card = () => {
  const getAllCountriesData = () => {
    fetch("https://api.covid19api.com/summary");
  };
  return (
    <div>
      <h2>Card</h2>
    </div>
  );
};

export default Card;
