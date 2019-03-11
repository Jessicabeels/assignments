import React from 'react'
import { withPubs } from '../Context/PubProvider'
import StuffSaved from './StuffSaved'

const SavedPubs = (props) => {

//    props.loadStuff()

// console.log(props.savedPubs)
//    console.log(props.savedPubs)
//    if (!(props.savedPubs)){

//     // this.setState ({
//     //     savedPubs: this.state.savedPubs || []
//     // })

//  }

   
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
