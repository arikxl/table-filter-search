import React, { useState } from 'react';

import Table from './Table';
import SearchBar from './SearchBar';

const Home = (props) => {

    const { products } = props;
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = filterText => {
        setFilterText(filterText);
    };

    const handleInStockOnlyChange = inStockOnly => {
        setInStockOnly(inStockOnly);
    };

    return (
        <div className="home">
            <SearchBar filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockOnlyChange={handleInStockOnlyChange} />
            <Table products={products}
                inStockOnly={inStockOnly}
                filterText={filterText} />
        </div>
    );
};

export default Home
