import React from "react"
import { useNavigate } from "react-router-dom";

const ProductCard = ({data}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${data.id}`,  { state: data });
    }
    return (<div className="product-card-container" onClick={handleNavigate}>
       <p>{data.name}</p>
       <p>{data.amount}</p>
       <button>Add to cart</button>
    </div>)
}

export default ProductCard