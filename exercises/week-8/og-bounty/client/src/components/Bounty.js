import React from 'react'

const Bounty = (props) => {
    const { firstName, lastName, living, bountyAmount, jedi, sith, deleteBounties, _id } = props
    console.log(props.sith)
    return (
        
        <div className="container">
            <h1>{firstName} {lastName} </h1>
            <h2>is Alive? {living.toString()} </h2>
            <h2>Bounty Amount {bountyAmount} </h2>
            {/* <h4> Type: {type.toString()} </h4> */}
            <h4> Type {sith} </h4>

            <button onClick={() => deleteBounties(_id)}> Delete</button>
        </div>
    )
}

export default Bounty