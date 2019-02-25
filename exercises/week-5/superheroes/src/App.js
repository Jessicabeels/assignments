import React from 'react'
import data from './heros.json'
import Superhero from './Superhero.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        //It is important to bind the function. If you do not then the function will not work and you will receive an error when you try and run it.
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        // alert('hero catchphrase');
       
      }


    render(){
      

        const mappedPhrase = data.heros.map((hero, key) => 
                                        <Superhero 
                                            name={hero.name} 
                                            superpower={hero.superpower}
                                            onClick = {() => {
                                                alert(hero.catchphrase)
                                            }}
                                            imgUrl = {hero.imgUrl}
                                            key={key}
                                    /> )

            // <div>
            //     <alert>CatchPhrase: {hero.catchphrase}</alert>
            // </div>)
            

        return (
            <div className="superheroes-container">
                {/* {mappedHeros} */}
                {/* <alert>CatchPhrase: {hero.catchphrase}</alert> */}
                {mappedPhrase}
                
                {/* <form onClick={this.handleClick}>
                <button>Click Me!</button></form> */}

            </div>
        )
    }
}

export default App

