import React from "react"
import ProductCard from "../productCard"
import TitleBar from "../titlebar"
const Cart = () => {
    let productList = JSON.parse(localStorage.getItem("productList") || "[]")
return (<div>
    <TitleBar title={"Cart"}/>
    {productList.filter((item)=> !!item.count).map((item)=> <ProductCard data={item}/>)}</div>)
}

export default Cart