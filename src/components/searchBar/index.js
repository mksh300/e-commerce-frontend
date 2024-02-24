import React, { useState } from "react"


const SearchBar = () => {

    const [inputValue, setInputValue] = useState("")
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    return (<div className="search-bar-container">
        <input placeholder="Search..." value={inputValue} onChange={handleInput} />
    </div>)
}

export default SearchBar