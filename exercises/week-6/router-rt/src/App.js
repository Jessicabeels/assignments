import React from 'react'
import Body from './Body.js'
import Footer from './Footer.js'
import Header from './Header.js'
import NewBody from './NewBody.js';

import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Header /> 
            <Switch>
                <Route exact path='/' component={Body} />
                <Route path='/newbody' component={NewBody} />
            </Switch>
            <Body /> 
            <NewBody /> 
            <Footer /> 
            
        </div>
    )
}


export default App