import React from "react";

import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { rootState } from "../redux/reducers/RootReducer";
import Cart from "../components/views/Cart";
import CountryTable from "../components/views/CountryTable";

import Search from "./Search";
import { Country } from "../types";
import { fetchCountries, FilteredData, setKeyword } from "../redux/action/CountryActions";

function Home() {
  const dispatch = useDispatch();
  const { keyword, countries } = useSelector(
    (state: rootState) => state.CountryReducer
  );
  //   const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(fetchCountries() as any);
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
