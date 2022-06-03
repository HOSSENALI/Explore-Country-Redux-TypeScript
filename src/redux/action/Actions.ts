import { Dispatch } from "redux"
import { AddToCartAction, Country } from "../../types"
import { ADD_TO_CART, GET_COUNTRIES } from "./ActionTypes"

export function Increment() {
    return {
        type: "INCREMENT_VALUE"
    }
}
export function Decrement() {
    return {
        type: "DECREMENT_VALUE"
    }
}
export function IncrementByPayload(value:string) {
    return {
        type: "INCREMENT_PAYLOAD",
        payload: value
    }
}
export function SetInput(value:string) {
    return {
        type: "SET_INPUT",
        payload: value
    } 
 
}
export function IncrementByButton(value:string) {
    return {
        type: "INCREMENT_BY_BUTTON",
        payload: value
    }
}
// export function getCountries(countries:Country[]): GetCountries{
//     return {
//         type: "GET_COUNTRIES",
//         payload:  countries,

//     }
// }


// export function fetchCountries() {

//     return (dispatch) => {
//         fetch("https://restcountries.com/v3.1/all")
//             .then((response) => response.json())
//             .then((data) => dispatch(getCountries(data)));
//     }
// } 

export const  fetchCountries = () => (dispatch:Dispatch ) => {
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => dispatch({
            type: GET_COUNTRIES,
            payload: {countries:data} 
        }))
};


export function addTocart(country:Country):AddToCartAction{
    // console.log("Hi there",country);
    return{
        type:ADD_TO_CART,
        payload:{
            country
        }
    }
}

