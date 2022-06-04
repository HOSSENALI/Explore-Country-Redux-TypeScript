import React from 'react'
type SearchProp={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Search = ({ value, handleChange }:SearchProp) => {

    return (
        <>
            <input type="text" value={value} onChange={handleChange} />
        </>);
}

export default Search;
