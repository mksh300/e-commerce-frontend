import React from "react"
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    let location = useLocation();

return (<div>
    <p>{location?.state?.name}</p>
    <p>{location?.state?.amount}</p>
</div>)
}

export default ProductDetails