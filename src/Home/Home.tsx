import "../components/views/App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { rootState } from "../redux/reducers/RootReducer";
import Cart from "../components/views/Cart";
import CountryTable from "../components/views/CountryTable";
import {
  Decrement,
  fetchCountries,
  FilteredData,
  Increment,
  IncrementByButton,
  IncrementByPayload,
  SetInput,
  setKeyword,
} from "../redux/action/Actions";
import Search from "./Search";
import { Country } from "../types";

function Home() {
  const dispatch = useDispatch();
  const { keyword, countries } = useSelector(
    (state: rootState) => state.CountryReducer
  );
  //   const [keyword, setKeyword] = useState("");
  console.log("omly", countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FilteredData(countries, keyword));
  }, [keyword]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setKeyword(e.target.value));
    },
    [keyword]
  );

  return (
    <div>
      <div className="search">
        <Search value={keyword} handleChange={handleChange} />
      </div>
      <Cart />
      <h1 className="heading">All Countries</h1>
      <CountryTable />
    </div>
  );
}

export default Home;
