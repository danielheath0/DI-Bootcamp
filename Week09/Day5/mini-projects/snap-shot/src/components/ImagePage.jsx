import { useLocation, useParams } from "react-router-dom";
import GetImages from "./GetImage.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState,useEffect } from 'react';



const ImagePage = (props) => {
    const location = useLocation()
    const { query } = useParams()
    const [searchTerm, setSearchTerm] = useState(query || props.query)
    
    useEffect(()=>{
        setSearchTerm(query || props.query)
    },[location])
    
    return (<>
        <div className="search-box"><SearchBox onSearch={newQuery => setSearchTerm(newQuery)} />
        </div>
        <h1>This is the {searchTerm} page</h1>
        <div className="container"><GetImages query={searchTerm} per_page={props.per_page} /></div></>
    );
}

export default ImagePage;