import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"


const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search/${searchTerm}`)

    }

    return (

        <form onSubmit={handleSearch}>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Search' />
            <button type="submit">Search</button>
        </form>

    );
}

export default SearchBox;