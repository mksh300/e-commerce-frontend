import React, { useEffect, useState } from "react"


const SearchBar = ({products, setProducts}) => {

    const [inputValue, setInputValue] = useState("")
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(()=>{
        const updatedProducts = products.filter((item)=> item.name.includes(inputValue))
        setProducts(updatedProducts)
    },[inputValue, products])

    return (<div className="search-bar-container">
        <input placeholder="Search..." value={inputValue} onChange={handleInput} />
    </div>)
}

export default SearchBar