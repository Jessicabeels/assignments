import React from 'react'
import SearchList from './SearchList'
import Searchbar from '../Searchbar'

const Saved = () => {
    return (
 
    <div className="body">
        <div className="box header">
        </div>
        <div className="box sidebar">
        <div className="prof">
            <h3> </h3>
            <div className="user">
                <h5>Your Name</h5>
                <p>@thedogtor</p>
                <p className="bio">Just a dog with a blog on science. </p>
            </div>
            
        </div>
        <div className="more">
            <div className="img img1"> </div>
            <div className="img img2"> </div>
            <div className="img img3"> </div>
            <div className="img img4"> </div>
        </div>
        </div>
        <div className="box content">
        {/* <PubList />  */}
        <h1>Your Saved Pubs</h1>
        <Searchbar />
        <SearchList />
        </div>
        <div className="box footer">Footer</div>
    </div>

    )
}

export default Saved