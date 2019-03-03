import React from 'react'

const AddThingForm  = (props) => {
//props to be destructed for ease of use
const { title, description, imgUrl, handleChange, HandleSubmit} = props
return (
    //form 
    <form onSubmit = {HandleSubmit}>
         <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange}
                placeholder="Title"/>
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={handleChange}
                placeholder="Description"/>
            <input 
                type="number" 
                name="price" 
                value={price} 
                onChange={handleChange}
                placeholder="Price"/>
            <input 
                type="text" 
                name="imgUrl" 
                value={imgUrl} 
                onChange={handleChange}
                placeholder="Image Url"/>
            <button>{ btnText }</button>
    </form>
)
}

export default AddThingForm