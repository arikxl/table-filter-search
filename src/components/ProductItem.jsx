import React from 'react'

const ProductItem = (props) => {

    const {product} = props;
    const coloredName = product.stocked ? product.name : 
    <span style={{color: 'red'}}>{product.name}</span>;

    return (
        <tr>
          <td>{coloredName}</td>
          <td align="right">{product.price}</td>
        </tr>
    )
}

export default ProductItem
