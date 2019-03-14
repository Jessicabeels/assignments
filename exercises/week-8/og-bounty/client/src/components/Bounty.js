import React from 'react'

const Bounty = (props) => {
    const { firstName, lastName, living, bountyAmount, type, handleDelete, _id } = props
    return (
        <div className="delete-container">
            <h1>{bounty.firstName} {bounty.lastName}</h1>
            <h1>is Alive? {bounty.living.toString()} </h1>
            <button onClick={() => handleDelete(_id)}> Delete</button>
        </div>
    )
}

export default Bounty