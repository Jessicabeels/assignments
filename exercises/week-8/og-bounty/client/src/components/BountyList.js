import React from 'react'
import Bounty from './Bounty.js'



//de-construct

//map

const BountyList = (props) => {
    console.log(props)
    return (
        <div>
            {props.bounties.map(bounty=> <Bounty 
                                            deleteBounties = {props.deleteBounties}  
                                            updateBounties = {props.updateBounties}
                                            jedi= {props.jedi}
                                            sith={props.sith}
                                            key={bounty._id}
                                            {...bounty}                                  
                                                />) }
        </div>
    )
}


export default BountyList 
//why is delete on list and change change, submit are not? 