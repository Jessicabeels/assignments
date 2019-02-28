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
                <div className="contain">
                
                    <div className="header"></div>
                    <div className="title">
                        <h1>Meet your Co-workers!</h1>
                        <h4>Submit your info and get to know the people you're working with.</h4> 
                    </div>
          
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
                
        //         <div className="header"></div>
        //         <div className="title">
        //             <h1>Meet your Co-workers!</h1>
        //             <h4>Submit your info and get to know the people you're working with.</h4> 
        //         </div>
        // </div>   
                
                 