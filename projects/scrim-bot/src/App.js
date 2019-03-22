import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
// import NewRoomForm from './components/NewRoomForm'
import './style.css'

import { tokenUrl, instanceLocator } from './config'
import UserMessageList from './components/UserMessageList';

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            roomId: '19394103',
            messages: [
                {
                id: 8329749823,
                senderId: 'SSHbot',
                text: '1. Has your partner ever threatened violence?'
                },
                {
                id: 8329749823,
                senderId: 'SSHbot',
                text: '2. Has your partner ever taken your cell phone?'
                },
                {
                id: 8329749825,
                senderId: 'SSHuser',
                text: '3. Do you feel anxious or nervous when you are around your partner?'
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '4.Do you watch what you are doing in order to avoid making your partner angry or upset?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '5. Do you feel obligated or coerced into having sex with your partner?' 
                }, 
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '6. Are you afraid of voicing a different opinion than your partner?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '7. Does your partner criticize you or embarrass you in front of others?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '8. Does your partner check up on what you have been doing, and believe your answers?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '9. Is your partner jealous, such as accusing you of having affairs?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '10. Does your partner tell you that they will stop beating you when you start behaving?' 
                }
            ],
            userMessages: [
                {
                    id: '',
                    senderId: 'user',
                    text: ''
                }
            ],
            joinableRooms: [],
            joinedRooms: [],
            currentUser: {}
        }
        // this.sendMessage = this.sendMessage.bind(this)
        // this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        // this.createRoom = this.createRoom.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'SSHbot',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }
    
    getRooms() {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            }
            // , () => this.testFunc(this.state.roomId) 
            )
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }

    testFunc = (roomId) => {
        console.log('getmsg ran')
        // this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
        })
    }
    
    subscribeToRoom(roomId) {
        console.log('subscribed')
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    console.log(message)
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }
    
    sendMessage = (text) => {
        console.log(text)
        let userInputMsg = {
            id: 8329749826,
            senderId: 'User',
            text: text
            }
            
        this.setState(prevState => ({
            userMessages: [
                ...prevState.userMessages, userInputMsg
            ]
        }))
        // this.setState({
        //     userMessages: [userInputMsg]
            
        // })
        // this.currentUser.sendMessage({
        //     text,
        //     roomId: this.state.roomId
        // })
    }


    
    // createRoom(name) {
    //     console.log('create room ran')
    //     this.currentUser.createRoom({
    //         name
    //     })
    //     .then(room => this.subscribeToRoom(room.id))
    //     .catch(err => console.log('error with createRoom: ', err))
    // }
    
    render() {
        console.log(this.state.roomId)
        return (
            <div className="app">
                <RoomList
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    roomId={this.state.roomId} />
                <MessageList 
                    roomId={this.state.roomId}
                    messages={this.state.messages} 
                    userMessages={this.state.userMessages}
                    />
                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage} />
                {/* <UserMessageList 
                    userMessages={this.state.userMessages}/> */}
                {/* <NewRoomForm createRoom={this.createRoom} /> */}
            </div>
        );
    }
}

export default App