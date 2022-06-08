import { Country, CountryActions } from "../../types";

import { ADD_TO_CART, GET_COUNTRIES, SET_FILTERED_DATA, SET_KEYWORD } from "../action/ActionTypes";

type InitialState = {
  countries: Country[];
  cart: Country[];
  filteredData: Country[];
  keyword: string;
};
const initialState: InitialState = {
  countries: [],
  cart: [],
  filteredData: [],
  keyword: "",
};
export default function CountryReducer(state = initialState,action: CountryActions): InitialState {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload.countries,
        filteredData:action.payload.countries,
      };
    }
    
    case SET_FILTERED_DATA: {
        // console.log("Hossen-ali",filteredData)
      return {
        ...state,
        filteredData:action.payload.filtered,
      };
      
    }
    case ADD_TO_CART: {
      const { country } = action.payload;
      //  console.log("Hi",country);
      return {
        ...state,
        cart: [...state.cart, country],
      };
    }
    case SET_KEYWORD: {
        console.log(state.keyword)
      return {
        ...state,
        keyword: action.payload,
      };
      
    }
    
    default:
      return state;
  }
}
function filteredData(filteredData: any) {
    throw new Error("Function not implemented.");
}

