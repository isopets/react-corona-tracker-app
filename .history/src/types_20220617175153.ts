export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};

interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

type TopPageType = {
  countriesJson: {
    Country: string;
    Slug: string;
  }[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: {
    date: string;
    newConfirmed: number;
    totalConfirmed: number;
    newRecovered: number;
    totalRecovered: number;
  };
  loading: boolean;
};

export type SelectorType = {
  // 追加
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countriesJson: {
    Country: string;
    Slug: string;
  }[];
};
