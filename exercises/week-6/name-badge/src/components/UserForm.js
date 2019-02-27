import React from 'react'

const UserForm = props => {
    const { firstName, lastName, phone, birth, about, email, favFood, handleChange, handleSubmit} = props

return (
                
    <form onSubmit={this.handleSubmit}>
        <input className = "name"
                            type="Text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange= {this.handleChange}
                            placeholder="First Name"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
        <input 
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email"
                            input pattern=".{3,}"   
                            required title="3 characters minimum"
                        />
                        <input 
                            type="number"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder="Phone Number"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="text"
                            name="favFood"
                            value={this.state.favFood}
                            onChange={this.handleChange}
                            placeholder="Favorite Food"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="text"
                            name="birthplace"
                            value={this.state.birthplace}
                            onChange={this.handleChange}
                            placeholder="Birthplace"
                            input pattern=".{3,}"   
                            required title="3 characters minimum"
                        />
                        <textarea className = "big-input"
                            type="text"
                            name="userInfo"
                            value={this.state.userInfo}
                            onChange={this.handleChange}
                            placeholder="Tell us about yourself"
                            textarea pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <button>Submit</button>
                    </form>
            

                )
}

export default UserForm