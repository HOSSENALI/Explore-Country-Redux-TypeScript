import React from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../redux/action/Actions';
const CountryTable = () => {
    const { countries } = useSelector((state) => state.CountryReducer);
    const dispatch = useDispatch();
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Region</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country) => (
                    <tr key={country.name.common}>
                        <td>{country.flag}</td>
                        <td>
                            
                                {country.name.common}
                            
                        </td>
                        <td>{country.population}</td>
                        <td>{country.region}</td>
                        <td><button className='btn btn-info' onClick={()=>dispatch(addTocart(country))}>Add</button></td>
                    </tr>
                ))}


            </tbody>
        </Table>
    );
}

export default CountryTable;