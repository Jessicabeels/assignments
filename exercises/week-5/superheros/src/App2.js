import React from 'react'
// import { ReactComponent } from '*.svg';
import data from './heros.json'
import Superhero from './Superhero.js'


class App extends React.Component {

    clickHeroes = () => {
        // let catchphrase = {catchphrase}
        alert("hero catchphrase" ) //+ catch1

    }

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        //It is important to bind the function. If you do not then the function will not work and you will receive an error when you try and run it.
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        alert('hero catchphrase');
       
      }


    render(){
        const mappedHeros = data.heros.map((hero,i) => 
            <div> 
                <div style={{backgroundImage: `url(${hero.imgUrl})`, backgroundSize: "contain", height: 300, width: 400}}>
                    <h1 style={{color: "white"}}>Name: {hero.name}</h1>
                </div>
        
            </div> )

        const mappedPhrase = data.heros.map((hero, i) => 
            <Superhero 
                onClick = {() => {
                    alert(hero.catchphrase)
                }}
        /> )

            // <div>
            //     <alert>CatchPhrase: {hero.catchphrase}</alert>
            // </div>)
            

        return (
            <div className="superheroes-container">
                {mappedHeros}
                {/* <alert>CatchPhrase: {hero.catchphrase}</alert> */}
                {mappedPhrase}
                <button onClick={this.clickHeroes}> Activate Lasers </button>
                <form onClick={this.handleClick}>
                <button>Click Me!</button></form>

            </div>
        )
    }
}

export default App

