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

export interface AllCountriesDataType extends Array<SingleCountriesDataType> {}
