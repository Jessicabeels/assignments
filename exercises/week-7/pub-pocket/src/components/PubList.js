import React from 'react'
import Pub from './Pub.js'
import { withPubs } from '../Context/PubProvider.js'


const PubList = (props) => {
console.log(props)
    const mappedPubs = props.pubs.map(pub =>
                                <Pub
                                    {...pub}
                                    key={pub._id}
                                    />)
    return (
        <div>
            {mappedPubs}
        </div>
    )


}

export default withPubs(PubList)


