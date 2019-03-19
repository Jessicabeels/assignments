import React from 'react'

const Bounty = (props) => {
    const { firstName, lastName, living, bountyAmount, type, handleDelete, _id } = props
    return (
        <div className="delete-container">
            <h1>{firstName} {lastName} </h1>
            <h2>is Alive? {living.toString()} </h2>
            <h2>Bounty Amount {bountyAmount} </h2>
            <h4> {type} </h4>
            <button onClick={() => handleDelete(_id)}> Delete</button>
        </div>
    )
}

export default Bounty