/** Repreact react lace these with your own API keys, username and roomId from Chatkit  */
import React from 'react'
import ReactDOM from 'react-dom'
import { ChatManager, TokenProvider, Chatkit } from '@pusher/chatkit-client'
import './style.css'
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/379f562d-db9a-412a-96ac-3c993084727a/token"
const myInstanceLocator = "v1:us1:379f562d-db9a-412a-96ac-3c993084727a"
const myRoomId = '19394103'
const username = 'jmbiene'




class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: {},
            messages: ["hellojkgkugkgkg", 'klwehiflhqwelfwlekfnklqwenflkqwneflknwqelkfnwqelk',
            'kjashdflkwehlfkwhqe']
        }
        this.sendMessage = this.sendMessage.bind(this)
       
    } 

    
    
    componentDidMount() {
        // const chatManager = new Chatkit.ChatManager({
        //     instanceLocator: instanceLocator,
        //     userId: 'janedoe',
        //     tokenProvider: new Chatkit.TokenProvider({
        //         url: testToken
        //     })
        // })
        const chatManager = new ChatManager({
            instanceLocator: myInstanceLocator ,
            userId: username,
            tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/379f562d-db9a-412a-96ac-3c993084727a/token' })
          })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.setState({currentUser: currentUser})
            this.currentUser.subscribeToRoom({
            roomId: myRoomId,
            hooks: {
                onNewMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        console.log(this.state.currentUser)
        this.state.currentUser.sendMessage({
            text,
            roomId: myRoomId
        })
    }
    
    

    render() {
        return (
            <div className="app">
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li  key={message.id} className="message">
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

function Title() {
  return <p className="title">SSH chat app</p>
}

ReactDOM.render(<App />, document.getElementById('root'));


























