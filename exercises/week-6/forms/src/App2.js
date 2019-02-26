import React from 'react'



//forms & inputs, button
//handle submit, handlechange
//name, value, onChange
//onSumbit

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            favMovie: "",
            favActor: "",
            isRotten: false,
            gender: ''
        }
    }

    handleChange = e => {
        // console.log(event.target.checked)
        const target = event.target
        //go over ternanry statements
        const value = target.type === "checkbox"
                                    ? target.checked
                                    : target.value,
        
        this.setState({
            [event.target.name]: value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        alert(this.state.favMovie)
        alert(this.state.favActor)
        this.setState({
            favMovie: ""
        })
    }


    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="favMovie"
                        value={this.state.favMovie}
                        onChange={this.handleChange}
                        placeholder="Favorite Movie"/>
                    <input
                        type="text"
                        name="favMovie"
                        value={this.state.favActor}
                        onChange={this.handleChange}
                        placeholder="Favorite Actor"
                        />
                        Is it Rotten? 
                        <input 
                        type="checkbox"
                        name="isRotten"
                        onChange={this.handleChange}
                        />
                        Male
                        <input 
                            type="radio"
                            name="gender"
                            onChange={this.handleChange}/>
                         Female
                        <input 
                            type="radio"
                            name="gender"
                            onChange={this.handleChange}/>
                         Other
                        <input 
                            type="radio"
                            name="gender"
                            onChange={this.handleChange}/>
                    <button>Submit</button>
            

                </form>
            </div>
        )
    }
}