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
            gender: '',
            favCity: '',
            actorCollection: []
        }
    }

    handleChange = e => {
        // console.log(event.target.checked)
        const target = e.target
        //go over ternanry statements
        const value = target.type === "checkbox"
                                    ? target.checked
                                    : target.value
        this.setState({
            [target.name]: value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        // alert(this.state.favMovie)
        // alert(this.state.favActor)

        //create the obj with all the user input to add to the array in state
        const actorObj = {
            favMovie: this.state.favMovie,
            favActor: this.state.favActor,
            isRotten: this.state.isRotten,
            gender: this.state.gender,
            favCity: this.state.favCity,
        }


        this.setState(prevState =>{
            return {
                actorCollection: [...prevState.actorCollection, actorObj],
                favMovie: '',
                favActor: '',
                isRotten: false,
                gender: '',
                favCity: ''
            }
        })
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="favMovie"
                        value={this.state.favMovie}
                        onChange={this.handleChange}
                        placeholder="Favorite Movie"/>
                    <input
                        type="text"
                        name="favActor"
                        value={this.state.favActor}
                        onChange={this.handleChange}
                        placeholder="Favorite Actor"
                        />
                        Is it Rotten? 
                    <input 
                        type="checkbox"
                        name="isRotten"
                        onChange={this.handleChange}
                        checked={this.state.isRotten}
                        />
                        Male
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}/>
                         Female
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}/>
                        Other
                    <input 
                        type="radio"
                        name="gender"
                        value="other"
                            onChange={this.handleChange}/>
                        <select name="favCity" onChange={this.handleChange}>
                            <option>Select City</option>
                            <option value="Paris">Paris</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Capetown">Capetown</option>
                            <option value="Reykajavik">Reykajavik</option>
                        </select>

                    <button>Submit</button>
            

                </form>
                <div>
                    {this.state.actorCollection.map((item, i) => {
                        return (
                            <div>
                                <h1> Movies {item.favMovie}</h1>
                                <h2>Actor {item.favActor}</h2>
                                <h3>IS Rotten? {item.isRotten.toString()}</h3>
                                <p>Fav City {item.isRotten}</p>
                                <p> Gender: {item.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App