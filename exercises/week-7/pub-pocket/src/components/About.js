import React from 'react'
// import PubList from './PubList';

const About = () => {
    return (
        <div className="about">
            <h3>We're making publications more accessible to you. </h3>
            
                <div className="grid-container">
                    <div class="boxA ">
                        <div className="transbox">
                        <h4>About us </h4>
                        
                        </div>
                    </div>



                    <div class="boxB ">
                        <div className="transbox">
                        <h4>Our Tech </h4>
                            </div>
                    </div>
                    <div class="boxC ">
                        <div className="transbox">
                        <h4>Giving Back </h4> 
                            
                        </div>
                    </div>
                    <div class="boxD ">
                    <div className="transbox">
                    <h4>People </h4>
                        
                        </div>
                    </div>
                    <div class="boxE "><div className="transbox">
                    <h4>Contact </h4> 
                        
                        </div>
                    </div>
                    <div class="boxF ">
                    <div className="transbox">
                    <h4>Science</h4>
                        
                        </div>
                    </div>
                    {/* <PubList /> */}
                </div>        
        </div>
    )
}

export default About