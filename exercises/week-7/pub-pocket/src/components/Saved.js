import React from 'react'
import PubList from './PubList'

const Saved = () => {
    return (
 
    <div className="body">
        <div className="box header">
        </div>
        <div className="box sidebar">sidebar
        <div className="prof"> Profile</div>
        <div className="more">Things you may like</div>
        </div>
        <div className="box content">
        <PubList />
        </div>
        <div className="box footer">Footer</div>
    </div>

    )
}

export default Saved