import React from 'react';

import ProductItem from './ProductItem';
import CategoryRow from './CategoryRow';

const Table = (props) => {

    const { products, inStockOnly, filterText } = props;
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (product.name.indexOf(filterText) === -1) return;
        if (inStockOnly && !product.stocked) return;
        if (product.category !== lastCategory) {
            rows.push(<CategoryRow product={product} key={product.category} />)
        }
        rows.push(<ProductItem product={product} key={product.name} />)
        lastCategory = product.category;
    });

    return (
        <table >
            <thead>
                <tr className="tr">
                    <th align="left">Name</th>
                    <th align="right">Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table
