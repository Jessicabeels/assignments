import React from 'react'



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName:"",
            email: "", 
            phone: "",
            favFood: "",
            userInfo:"",
            badge: []

        }
    }


    handleChange = (e) => {
        //e.target.name: The literal name we gave the input that MUST match the input name in state
        //e.target.value: The literal value the user just typed into the input box
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //use prev state so you can maintain previous 
        //entries to the array while adding to new one

        //create the obj with all the user input to add the array in state
        const badgeObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            favFood: this.state.favFood,
            userInfo: this.state.userInfo
        }

        this.setState(prevState => {
            return {
                badge: [...prevState.badge, badgeObj],
                firstName : "",
                lastName : "",
                email : "", 
                phone : "",
                favFood : "",
                userInfo:"",
                
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="Text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange= {this.handleChange}
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <input 
                        type="number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                    />
                    <input 
                        type="text"
                        name="favFood"
                        value={this.state.favFood}
                        onChange={this.handleChange}
                        placeholder="Favorite Food"
                    />
                    <input 
                        type="text"
                        name="userInfo"
                        value={this.state.userInfo}
                        onChange={this.handleChange}
                        placeholder="Tell us about yourself"
                    />
                </form>
            </div>
        )
    }






}

export default App