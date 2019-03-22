import React from 'react'
import ReactDOM from 'react-dom'
import  UserMessage from './UserMessage'


class UserMessageList extends React.Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if(this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }


    render() {
        console.log(this.props.userMessages)
        
        
        return (
            <div className="usermessage-list">
                { this.props.userMessages.map(userMessages => {
                    return (
                        <UserMessage key={userMessages.id} username={userMessages.senderID} text={userMessages.text} />
                        
                    )
                })}

            </div>
        )
    }
}

export default UserMessageList