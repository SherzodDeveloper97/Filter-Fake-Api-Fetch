import React from 'react';
import './searchbox.css';

function SearchBox({onSearchChange}) {
    return (
        <div>
            <input type="search" onChange={onSearchChange} className='form-control m-3 mb-5' id='search-input' />
        </div>
    )
}
export default SearchBox;
