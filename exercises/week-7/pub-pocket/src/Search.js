import React from 'react'


const Search = (props) => {

    return (
        <form>
            <input className = "search"
            type="text"
            name="search-term"
            // value={search}
            placeholder = "Search"
            />
        </form>
    )
}

export default Search