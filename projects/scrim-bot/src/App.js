import React from 'react'
import Chatkit from '@pusher/chatkit-client'

import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './style.css'
import { tokenUrl, instanceLocator } from './config'

const myRoomId = '19394103'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            messages: []
        }
    }    


    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'jmbiene', /** swap out */
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: myRoomId, /** swap out */ 
                ///made me make this a string, i think that might be whats breaking it
                //parseint
                hooks: {
                    onNewMessage: message => {
                        // console.log('message.text: ', message.text);
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })
    }
    
    render() {
        console.log('this.state.messages:', this.state.messages)
        return (
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages}/>
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App