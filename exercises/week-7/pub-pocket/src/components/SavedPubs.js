import React from 'react'
import { withPubs } from '../Context/PubProvider'
import StuffSaved from './StuffSaved'

const SavedPubs = (props) => {

    

console.log(props.savedPubs)
   console.log(props.savedPubs)
   if (!(props.savedPubs)){

    // this.setState ({
    //     savedPubs: this.state.savedPubs || []
    // })

 }
   
   
   const mappedSaved = props.savedPubs.map(saved => 
                                        <StuffSaved 
                                            {...saved}
                                            key={saved._id}
                                        />) 


        return (
            <div className = "saved-container">
                {mappedSaved}
            </div>
    
        )




        }





export default withPubs(SavedPubs)
