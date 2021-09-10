import React from 'react'

const CategoryRow = (props) => {

    const {product} = props;



    return (
        <tr>
            <th colSpan="2">
                {product.category}
            </th>
        </tr>
    )
}

export default CategoryRow
