import React from 'react'
import '../body/Body.scss'
import SearchBar from './searchBar/SearchBar'
import Discovery from './discovery/Discovery'
function Body() {
    return (
        <div className ="body-container">
            <SearchBar />
            <Discovery />
        </div>
    )
}

export default Body
