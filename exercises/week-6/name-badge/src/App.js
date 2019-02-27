import React, { Component } from 'react'
import './style.css'
import Container from './components/Container';
import UserForm from './components/UserForm.js'

//Form Component
    //7 inputs
    //handleSubmit, handleChange
    //constructor and state
//NameBadgeList
//NameBadge

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName:"",
            email: "", 
            phone: "",
            favFood: "",
            birthplace: "",
            userInfo:"",
            badges: []

        }
    }


    handleChange = (e) => {
        //e.target.name: The literal name we gave the input that MUST match the input name in state
        //e.target.value: The literal value the user just typed into the input box

        //if statement for textarea 3+
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
            birthplace: this.state.birthplace,
            userInfo: this.state.userInfo
        }

        this.setState(prevState => {
            return {
                badges: [badgeObj,...prevState.badges],
                //if you want the new badge to appear first, just put badgeObj first
                firstName : "",
                lastName : "",
                email : "", 
                phone : "",
                favFood : "",
                birthplace: "",
                userInfo:"",
                
            }
        })
    }


    render(){
        const {firstName, lastName, phone, birthplace, email, userInfo, favFood, badges} = this.state
        return (
                <div>
                    <UserForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        firstName={firstName}
                        lastName={lastName}
                        phone={phone}
                        birthplace={birthplace}
                        userInfo={userInfo}
                        email={email}
                        fav={favFood} />
                    <Container badges={badges}/>
                </div>
            
            
        )


    }

}

export default App
    
            // <div className="contain">
                
                
            //     <div className="header">  
            //     </div>
            //     <div className="title">
            //         <h1>Meet your Co-workers!</h1>
            //         <h4>Submit your info and get to know the people you're working with.</h4> 
            //     </div>
                
            //     <div className ="name-form">
            //         <form onSubmit={this.handleSubmit}>
            //             <input className = "name"
            //                 type="Text"
            //                 name="firstName"
            //                 value={this.state.firstName}
            //                 onChange= {this.handleChange}
            //                 placeholder="First Name"
            //                 input pattern=".{3,}"
            //                 required title="3 characters minimum"
            //             />
            //             <input 
            //                 type="text"
            //                 name="lastName"
            //                 value={this.state.lastName}
            //                 onChange={this.handleChange}
            //                 placeholder="Last Name"
            //                 input pattern=".{3,}"
            //                 required title="3 characters minimum"
            //             />
            //             <input 
            //                 type="email"
            //                 name="email"
            //                 value={this.state.email}
            //                 onChange={this.handleChange}
            //                 placeholder="Email"
            //                 input pattern=".{3,}"   
            //                 required title="3 characters minimum"
            //             />
            //             <input 
            //                 type="number"
            //                 name="phone"
            //                 value={this.state.phone}
            //                 onChange={this.handleChange}
            //                 placeholder="Phone Number"
            //                 input pattern=".{3,}"
            //                 required title="3 characters minimum"
            //             />
            //             <input 
            //                 type="text"
            //                 name="favFood"
            //                 value={this.state.favFood}
            //                 onChange={this.handleChange}
            //                 placeholder="Favorite Food"
            //                 input pattern=".{3,}"
            //                 required title="3 characters minimum"
            //             />
            //             <input 
            //                 type="text"
            //                 name="birthplace"
            //                 value={this.state.birthplace}
            //                 onChange={this.handleChange}
            //                 placeholder="Birthplace"
            //                 input pattern=".{3,}"   
            //                 required title="3 characters minimum"
            //             />
            //             <textarea className = "big-input"
            //                 type="text"
            //                 name="userInfo"
            //                 value={this.state.userInfo}
            //                 onChange={this.handleChange}
            //                 placeholder="Tell us about yourself"
            //                 textarea pattern=".{3,}"
            //                 required title="3 characters minimum"
            //             />
            //             <button>Submit</button>
            //         </form>
            //     </div>
                
                
           
    
        
 