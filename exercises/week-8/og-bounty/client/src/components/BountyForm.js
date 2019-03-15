import React from 'react'

const BountyForm = props => {
        const { handleSubmit, handleChange, firstName, lastName, living, bountyAmount, type } = props
        return (
                <form onSubmit={this.handleSubmit}>
                First Name:
                  <input
                     type="text"
                     name="firstName"
                     value={this.state.firstName}
                     onChange={this.handleChange}  />
                Last Name: <input
                     type="text"
                     name="lastName"
                     value={this.state.lastName}
                     onChange={this.handleChange}/>
                <input
                     type="radio"
                     name="living" 
                     value={this.state.living} 
                     onChange={this.handleChange}/> Alive
                <input
                     type="radio"
                     name="living" 
                     value={this.state.living}
                     onChange={this.handleChange}/> Dead
                Bounty Amount <input
                     type="text"
                     name="bountyAmount"
                     value={this.state.bountyAmount}
                     onChange={this.handleChange}/>
                Jedi <input type="radio"
                     name="type" 
                     value={this.state.type} 
                     onChange={this.onChange}/>
                Sith <input
                     type="radio"
                     name="type" 
                     value={this.state.type} 
                     onChange={this.onChange}/>

                <button> Submit </button>

            </form>
        )
}