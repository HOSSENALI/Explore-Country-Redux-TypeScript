import './App.css';
import { useSelector, useDispatch } from "react-redux";

import { Decrement, fetchCountries,  Increment, IncrementByButton, IncrementByPayload, SetInput } from './redux/action/Actions';
import { useEffect } from 'react';
import CountryTable from './components/views/CountryTable';
import Cart from './components/views/Cart';

function App() {
  const dispatch = useDispatch();
  const { value, buttonInput } = useSelector((state) => state.CounterReducer);  

  const handleChangeIncrement = () => {
    dispatch(Increment());
  }
  const handleChangeDecrement = () => {
    dispatch(Decrement());
  }
  const handleInput = (e) => {
    dispatch(IncrementByPayload(parseInt(e.target.value)));
  }
  const setInput = (e) => {
    dispatch(SetInput(e.target.value));
  }
  const handleChangeButton = (buttonInput) => {
    dispatch(IncrementByButton(buttonInput));

  }
  useEffect (() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <p>
        <button onClick={handleChangeIncrement}>+</button>
        {value}
        <button onClick={handleChangeDecrement}>-</button>
        <input onChange={handleInput} />

        <h1>Add by input Field</h1>
        <input type="number" onChange={setInput} />
        <button onClick={() => handleChangeButton(parseInt(buttonInput))}>Add</button>
      </p>
      
      <Cart />
      <h1 className='heading'>All Countries</h1>
      <CountryTable/>
    </div>
  );
}

export default App;
