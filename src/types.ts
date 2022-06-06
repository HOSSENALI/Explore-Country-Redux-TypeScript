import { GapValue } from "react-bootstrap/esm/types";
import {
  ADD_TO_CART,
  GET_COUNTRIES,
  SET_FILTERED_DATA,
  SET_KEYWORD,
} from "./redux/action/ActionTypes";

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

//types of Actions for types.ts .....................
export type GetCountries = {
  type: typeof GET_COUNTRIES; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: {
    countries: Country[];
  };
};
export type setFiltered = {
  type: typeof SET_FILTERED_DATA; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: {
    filtered: Country[];
  };
};
export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: {
    country: Country;
  };
};
export type SetKeyword = {
  type: typeof SET_KEYWORD;
  payload: string;
};

// to make type for action in reducer,we need to do union of every action's type from here.
export type CountryActions =
  | AddToCartAction
  | GetCountries
  | SetKeyword
  | setFiltered;
