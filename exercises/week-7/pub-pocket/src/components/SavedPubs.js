import React from 'react'
import { withPubs } from '../Context/PubProvider'
import StuffSaved from './StuffSaved'

const SavedPubs = (props) => {


   
   console.log(props)
   const mappedSaved = props.savedPubs.length > 0 ? props.savedPubs.map(saved => 
                                        <StuffSaved 
                                            {...saved}
                                            key={saved._id}
                                        />) 
                                        : null


        return (
            <div className = "saved-container">
                {mappedSaved}
            </div>
    
        )




        }





export default withPubs(SavedPubs)
