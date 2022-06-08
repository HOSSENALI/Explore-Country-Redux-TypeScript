import { Country, CountryActions } from "../../types";

import { ADD_TO_CART, GET_COUNTRIES, SET_FILTERED_DATA, SET_KEYWORD } from "../action/ActionTypes";


const initialState= {
  InputUserName:"",
  InputPassword:"",
  errorMessage:"",
  isLogged:false,
  Hossen:"",

};
export default function LoginReducer(state = initialState,action) {
  switch (action.type) {

    case "SET_INPUT_USER_NAME": {
      return {
        ...state,
        InputUserName: action.payload,
        
      };
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        InputPassword: action.payload,

        
      };
    }
    case "SET_IS_LOGGED": {
      return {
        ...state,
        isLogged: true,
        errorMessage: "",

      };
    }
    
    case "SET_ERROR": {
      return {
        ...state,
        errorMessage: "Sorry!!!",
        
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        isLogged: false,
        Hossen:"ali",
        
      };
    }
    
    
    
    default:
      return state;
  }
}

