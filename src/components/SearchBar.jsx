import React from 'react'

const SearchBar = (props) => {

    const {filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange} = props;


    return (
        <form>
            <input type="text" placeholder="Search..."
            value={filterText}
            onChange={event => onFilterTextChange(event.target.value)} />
            <p>
                <input type="checkbox" checked={inStockOnly}
                onChange={event => onInStockOnlyChange(event.target.checked)} />
                <span className="stock-span"> Only show products in stock</span>
            </p>
        </form>
    )
}

export default SearchBar
