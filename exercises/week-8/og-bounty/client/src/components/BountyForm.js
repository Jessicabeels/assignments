import React from 'react'


const BountyForm = props => {
        const { handleSubmit, handleChange, firstName, lastName, living, bountyAmount, type } = props
        return (
                <form onSubmit={handleSubmit}>
                <h2>First Name:</h2>
                  <input
                     type="text"
                     name="firstName"
                     value={firstName}
                     onChange={handleChange}  />
                <h2>Last Name:</h2>
                <input
                     type="text"
                     name="lastName"
                     value={lastName}
                     onChange={handleChange}/>
                <input
                     type="radio"
                     name="living" 
                     value={living} 
                     onChange={handleChange}/> Alive
                <input
                     type="radio"
                     name="living" 
                     value={living}
                     onChange={handleChange}/> Dead
                Bounty Amount <input
                     type="text"
                     name="bountyAmount"
                     value={bountyAmount}
                     onChange={handleChange}/>
                Jedi <input type="checkbox"
                     name="jedi" 
                     value={jedi} 
                     onChange={handleChange}/>
                Sith <input
                     type="checkbox"
                     name="sith" 
                     value={sith} 
                     onChange={handleChange}/>

                <button> Submit </button>

            </form>
        )
}

export default BountyForm