import React from 'react'
import { withPubs } from '../Context/PubProvider'
import StuffSaved from './StuffSaved'

const SavedPubs = (props) => {

   console.log(props)
   const mappedSaved = props.searches.map(saved => 
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
