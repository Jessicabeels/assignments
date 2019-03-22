import React from 'react'

const AddBountyForm = props => {
    const { handleSubmit, handleChange, firstName, lastName, living, btnText, bountyAmount, jedi, sith } = props
    return (
        <form onSubmit={handleSubmit}>
                    Firsto Name:
                      <input
                         type="text"
                         name="firstName"
                         value={firstName}
                         onChange={handleChange}  />
                    Last Name: <input
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
                    Jedi <input 
                         type="checkbox"
                         checked = {jedi}
                         name="jedi" 
                         value={jedi} 
                         onChange={handleChange}/>
                    Sith <input
                         type="checkbox"
                         checked = {sith}
                         name="sith" 
                         value={sith} 
                         onChange={handleChange}/>

                    <button> {btnText} </button>

                </form>
    )
}

export default AddBountyForm