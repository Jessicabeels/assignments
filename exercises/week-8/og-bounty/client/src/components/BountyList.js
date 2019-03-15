import React from 'react'
import Bounty from './Bounty.js'



//de-construct

//map

const BountyList = (props) => {
    return (
        <div>
            {props.bounties.map(bounty=> <Bounty 
                                            deleteBounty = {props.deleteBounty}  
                                            key={bounty._id}
                                            {...bounty}                                  
                                                />) }
        </div>
    )
}


export default BountyList 
//why is delete on list and change change, submit are not? 