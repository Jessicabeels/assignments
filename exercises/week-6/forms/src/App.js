import React from 'react'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            ageInput: "",
            names: []
        }
    }
    
    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        this.setState({
            // nameInput: e.target.value,
            // ageInput: e.target.value
            //instead
            [e.target.name]: e.target.value
        })
        

    }

    handleSubmit = (e) => {
        e.preventDefault()
        // alert(this.state.nameInput)
        this.setState({
            names: this.state.nameInput,
            nameInput: "",
            ageInput: "",

        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <h2>{this.state.ageInput}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nameInput" value={this.state.nameInput} placeholder="name" onChange/>
                    {/* //essential for every input and form */}
                    <input type="text" name="ageInput" value={this.state.ageInput}  placeholder="age" onChange></input>
                    <button>Submit</button>
                </form>
               

            </div>
        )
    }
}



export default App

