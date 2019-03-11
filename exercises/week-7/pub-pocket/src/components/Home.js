import React from 'react'
import PubList from './PubList'
import SearchList from './SearchList';
import Searchbar from '../Searchbar';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from './myCarousel.js'

const Home = () => {
    return (
    <div className="body">
        <div className="box header">
        </div>
        <div className="box sidebar">
        <div className="prof">
            {/* <h3> </h3> */}
            <div className="user">
            <i class="fas fa-user-circle"></i>
                <h5>Your Name</h5>
                <p>@thedogtor</p>
                <p className="bio">Just a dog with a blog.</p>
            </div>
            
        </div>
        <div className="more">
            {/* <div className="img img1"> </div> */}
            {/* <div className="img img2"> </div> */}
            {/* <div className="img img3"> </div> */}
            {/* <div className="img img4"> </div> */}
            Search All Open Access Journals
            <Searchbar />
            <SearchList />
        </div>


        </div>
        <div className="content">
            {/* <div className="rotator"> </div>   */}
            <div className="carousel">
            
                <Carousel /> 
            </div>
            <PubList />
        </div>
        <div className="box footer"></div>
    </div>
    )
}

export default Home