import React from 'react'
import Thing from './Thing'

const ThingsList = (props) => {
    const mappedThings = props.things.map (thing => 
                                    <Thing 
                                        {...thing}
                                        key = {thing._id}
                                    />)

    return (
        <div>
            { mappedThings }
        </div>
    )
}

export default ThingsList