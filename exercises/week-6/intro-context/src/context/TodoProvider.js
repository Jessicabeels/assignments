import React, {}


const TodoContest = Reac.createContest()
//provier consumer

class Todo Provider extends Component {





    render(){

        const props = {
            todos: this.state.todos,
            getTodos: this.getTodos
        }
        return (
        <TodoContest.Provider>
            {this.props.children}
            {/* //bc class component  this.props.children if functional props.children  */}
        </TodoContest.Provider>
        )

    }
}

export const withTodos = C => props => {
    <TodoContest.Consumer>
    {value => <C {...props}{...value} />}
    //C == App
    </TodoContest.Consumer>
}