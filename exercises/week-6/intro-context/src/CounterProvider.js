
const CounterContext = React.createContext()
console.log(CounterContext)

class CounterProvider extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }


    increment = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }



    render(){
        return (
            <CounterContext.Provider>
                value={{
                    counter: this.state.counter,
                    increment: this.increment
                }}
                    {this.props.children}
            </CounterContext.Provider>
        )
    }
}

export const withCounter = (C) => props => (
    //C and props are arguments and 2 separate functions , thats why its separate. 
    <CounterContext.Consumer>
        {value => <C {...props} {...value} />}
    </CounterContext.Consumer>
)

export default CounterProvider