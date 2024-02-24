import React, {useState} from "react"
import SearchBar  from "../searchBar"
import ProductCard from "../productCard"
import productData from "./mockData"
import TitleBar from "../titlebar"

const Home = () => {
    const [products, setProducts] = useState(productData)
return (
    <React.Fragment>
        <TitleBar title={"Home"}/>
    <SearchBar products={productData} setProducts={setProducts}/>
    <div className="product-list-container">
    {products.map((item)=> <ProductCard data={item}/>)}
    </div>
    </React.Fragment>
    )
}

export default Home