import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux';
import { rootState } from '../../redux/reducers/RootReducer';
import { Country } from '../../types';

const Cart = () => {
    const { cart } = useSelector((state:rootState) => state.CountryReducer);
    console.log(cart);
    return ( 
        <div>
            <h1 className='heading'>Selected Countries ({cart.length})</h1>
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
                    {cart.map((country:Country ) => (
                        <tr key={country.name.common}>
                            <td>{country.flag}</td>
                            <td>

                                {country.name.common}

                            </td>
                            <td>{country.population}</td>
                            <td>{country.region}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))} 
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;