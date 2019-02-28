import React from 'react'

const UserForm = props => {
    const { firstName, lastName, phone, birthplace, userInfo, email, favFood, handleChange, handleSubmit} = props

return (
                
    <form onSubmit={handleSubmit} className="name-form">
        <input className = "name"
                            type="Text"
                            name="firstName"
                            value={firstName}
                            onChange= {handleChange}
                            placeholder="First Name"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
        <input 
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            input pattern=".{3,}"   
                            required title="3 characters minimum"
                        />
                        <input 
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="text"
                            name="favFood"
                            value={favFood}
                            onChange={handleChange}
                            placeholder="Favorite Food"
                            input pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <input 
                            type="text"
                            name="birthplace"
                            value={birthplace}
                            onChange={handleChange}
                            placeholder="Birthplace"
                            input pattern=".{3,}"   
                            required title="3 characters minimum"
                        />
                        <textarea className = "big-input"
                            type="text"
                            name="userInfo"
                            value={userInfo}
                            onChange={handleChange}
                            placeholder="Tell us about yourself"
                            textarea pattern=".{3,}"
                            required title="3 characters minimum"
                        />
                        <button>Submit</button>
                    </form>
            

                )
}

export default UserForm