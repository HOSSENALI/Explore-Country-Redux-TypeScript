import { Country, CountryActions } from "../../types";

import { ADD_TO_CART, GET_COUNTRIES } from "../action/ActionTypes";
type InitialState={
    countries:Country[],
    cart:Country[]
}
const initialState:InitialState  = {
    countries: [],
    cart:[]
};
export default function countryReducer(state = initialState, action:CountryActions) :InitialState{
    switch (action.type) {

        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload.countries,
            };
        }
        case ADD_TO_CART: {
            const {country}=action.payload
            //  console.log("Hi",country);
            return {
              ...state,  
              cart:[...state.cart,country]
              
            };
            
        }
        default:
            return state;
    }
}