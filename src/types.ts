import { ADD_TO_CART, GET_COUNTRIES } from "./redux/action/ActionTypes";

export type Country = {
  name: { common: string };
  flag: string;
  population: number;
  region: string;
  languages: MyLanguage;
};

export type MyCountry = {
  countries: Country[];
};

export type MyLanguage = {
  [key: string]: string;
};
//it is not needed here.....................
export type GetCountries = {
  type: typeof GET_COUNTRIES;
  payload: {
    countries: Country[];
  };
};
export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: {
    country: Country;
  };
};

// to make type for action in reducer,we need to do union of every action's type from here.
export type CountryActions = AddToCartAction | GetCountries;
