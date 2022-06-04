import React, { useState, useEffect } from 'react';

import { Country } from '../../types';

const Details = () => {
    const { name } = useParams();
    const [countries, setCountries] = useState([]);
   
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))

    }, []);

    return (
        <div>
            {countries.filter((country:Country) => country.name.common === name).map((filteredCountry:Country) => (

                <div key={filteredCountry.name.common}> 
                 <h1>Country name:{filteredCountry.name.common}</h1>
                 <h1>Flag:{filteredCountry.flag}</h1>
                 <h1>Population:{filteredCountry.population}</h1>
                 </div>
                 

            ))}
        </div>
    );
}

export default Details;

function useParams(): { name: any; } {
    throw new Error('Function not implemented.');
}
