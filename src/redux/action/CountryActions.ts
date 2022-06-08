import { useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux"
import { AddToCartAction, Country, setFiltered, SetKeyword } from "../../types"
import { rootState } from "../reducers/RootReducer";
import { ADD_TO_CART, GET_COUNTRIES, SET_FILTERED_DATA, SET_KEYWORD } from "./ActionTypes"

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

export const  fetchCountries = () => (dispatch:Dispatch )=> {

    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => dispatch({
            type: GET_COUNTRIES,
            payload: {
                countries:data
            } 
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
export function setKeyword(value:string):SetKeyword{
    return {
        type: SET_KEYWORD,
        payload: value
    }
}

export function FilteredData(countries:Country[],keyword:string):setFiltered{
    // const { keyword} = useSelector((state: rootState) => state.CountryReducer);
    let filteredData = countries.filter((country:Country) => {
        return (
            country.name.common
                .toLowerCase()
                .search(keyword.toLocaleLowerCase()) !== -1);
    });
    return{
        type:SET_FILTERED_DATA,
        payload:{
            filtered:filteredData
        }
    }
}