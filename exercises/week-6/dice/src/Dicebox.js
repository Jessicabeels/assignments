import React from 'react'
import Die from './Die.js'


class DiceBox extends React.Component {
    constructor() {
        super()

        this.state = {
            die1: this.randomNum(),
            die2: this.randomNum(),
            die3: this.randomNum(),
            die4: this.randomNum(),
            die5: this.randomNum()
        }
    }

    randomNum = () => {
        return (Math.floor(Math.random() * 6) + 1)
    }

    handleDiceRoll = () => {
        this.setState({
                die1: this.randomNum(),
                die2: this.randomNum(),
                die3: this.randomNum(),
                die4: this.randomNum(),
                die5: this.randomNum()
        })
    }
    render() {
        return (
            <div>
                
                <button onClick={this.handleDiceRoll}>Roll</button>
                <div className='container'>
                    <Die num={this.state.die1}/>
                    <Die num={this.state.die2}/>
                    <Die num={this.state.die3}/>
                    <Die num={this.state.die4}/>
                    <Die num={this.state.die5}/>
                </div>
            </div>
        )
    }
}


export default DiceBox