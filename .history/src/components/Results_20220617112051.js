const Results = props => {
  console.log("Resultsのprops", props);
  return (
    <div>
      <p>日付:{props.countryData.date}</p>
      <p>新規感染者:{}</p>
      <p>感染者総数</p>
      <p>新規回復者</p>
      <p>回復者総数</p>
    </div>
  );
};

export default Results;
