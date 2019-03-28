import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostList from './components/PostList.js'


class App extends Component {
    render(){
        const { token, logout } = this.props
        return (
            <div>
                { token && <button onClick={logout}>Logout</button> }
                <Switch>
                    <Route exact path="/" render={rProps => <Auth {...rProps}/>}/>
                    <Route path="/posts" render={rProps => <PostList {...rProps}/>}/>
                </Switch>
            </div>
        )
    }
}

export default withUser(App)




// Routing
    // front-end routing
        // which url loads which component
    // back-end routing
        // request to /api/posts will get me posts data