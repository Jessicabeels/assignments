import React from 'react'
import Thing from './Thing'

const ThingList = (props) => {
    const mappedThings = props.things.map(thing => 
                                <Thing
                                    {...thing} 
                                    handleDelete={props.handleDelete} 
                                    handleEdit={props.handleEdit}
                                    key={thing._id}
                                />)

    return (
        <div className="list">
            { mappedThings }
        </div>
    )
}

export default ThingList