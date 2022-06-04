import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './components/views/About';
import Details from './components/views/Details';
import Welcome from './components/views/Welcome';
import Counter from './Counter/Counter';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path="/details/:name" element={<Details />} />
        <Route  path='/welcome' element={<Welcome />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>);
}

export default App;