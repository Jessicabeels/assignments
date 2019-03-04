import React from 'react'

const AddThingForm = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit, btnText } = props
    return (
        <form onSubmit={handleSubmit} className="form">
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