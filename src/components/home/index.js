import React, {useState} from "react"
import SearchBar  from "../searchBar"
import ProductCard from "../productCard"

const Home = () => {
    const [products, setProducts] = useState([
        {id: 1, name: "test1", amount: 100}, 
        {id: 2, name: "test2", amount: 200},
         {id: 3, name: "test3", amount: 300},
         {id: 1, name: "test1", amount: 100}, 
         {id: 2, name: "test2", amount: 200},
          {id: 3, name: "test3", amount: 300},
          {id: 1, name: "test1", amount: 100}, 
          {id: 2, name: "test2", amount: 200},
           {id: 3, name: "test3", amount: 300},
           {id: 1, name: "test1", amount: 100}, 
           {id: 2, name: "test2", amount: 200},
            {id: 3, name: "test3", amount: 300}])
return (
    <React.Fragment>
    <SearchBar/>
    <div className="product-list-container">
    {products.map((item)=> <ProductCard data={item}/>)}
    </div>
    </React.Fragment>
    )
}

export default Home