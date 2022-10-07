import React, { useContext } from 'react'
import { UserContext } from '../App'

const Post = ({content, image, user}) => {
  const currentUser = useContext(UserContext)
  const isCurrentUser = currentUser === user;
  const color = 'red'
  return (    
      <div style={{borderStyle: 'solid', borderWidth: '2px' }}>
        <div>
              <div>Content: {content}</div>
              
                { image && (
                  <img src={URL.createObjectURL(image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
                )}
                <div style={{color: isCurrentUser  && color }}>user: {user}</div>
                { isCurrentUser && <button>Delete</button> }
        </div>
      </div>
  )
}

export default Post