import React, { useState } from 'react'

const ComposePost = ({user, setPosts}) => {
    const [content, setContent] = useState("")
    const [image , setImage] = useState(null)
    const handleSubmit = event => {
        event.preventDefault();
        const post = { content, image, user };
        setPosts((prev) => [post, ...prev])

    }
  return (
    <>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event)=> setContent(event.target.value)} placeholder='Add Post Comment'/>
            <input type="file"  onChange={(event)=> setImage(event.target.files[0])} />
            <button type='submit'>Submit Post</button>
        </form>
        <p>{content} {user}</p> 
       { image && <img src={URL.createObjectURL(image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} /> }
    </>
    
  )
}

export default ComposePost