import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
    const navigate = useNavigate();
    const [update, setUpdate] = useState(false)
    let productList = JSON.parse(localStorage.getItem("productList") || "[]")

    const handleNavigate = () => {
        navigate(`/product/${data.id}`, { state: data });
    }
    const addProduct = (e) => {
        e.stopPropagation();
        const index = productList.findIndex((item) => item.id === data.id)
        if (productList[index]) {
            productList[index].count += 1
        } else {
            productList = [...productList, data]
        }
        localStorage.setItem("productList", JSON.stringify(productList))
        setUpdate((prev) => !prev)
    }
    const removeProduct = (e) => {
        e.stopPropagation();
        const index = productList.findIndex((item) => item.id === data.id)
        if (productList[index]) {
            productList[index].count -= 1
            localStorage.setItem("productList", JSON.stringify(productList))
        }
        setUpdate((prev) => !prev)
    }

    const productInCart = productList?.find((item) => item.id === data.id)

    return (<div className="product-card-container" onClick={handleNavigate}>
        <p>{data.name}</p>
        <p>{data.amount}</p>
        <button onClick={addProduct}>{productInCart?.count ? `+${productInCart?.count}` : "Add to cart"}</button>
        {!!productInCart?.count && <button onClick={removeProduct}>Remove item</button>}
    </div>)
}

export default ProductCard