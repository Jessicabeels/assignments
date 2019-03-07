import React from 'react'
import Search from './Search.js'
import { withPubs } from '../Context/PubProvider.js'


const SearchList = (props) => {

    const mappedSearch = props.searches.map(pub =>
                                            <Search
                                                {...pub}
                                                key={pub._id}
                                                    />)

        return (
            <div>
                {mappedSearch}
            </div>
        )
    
}

export default withPubs(SearchList)