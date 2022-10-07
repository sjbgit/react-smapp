import React from 'react'
import { UserContext } from '../App'

const Post = ({content, image, user}) => {
  const color = 'red'
  return (
    <UserContext.Consumer>
      { currentUser => (
      <div style={{borderStyle: 'solid', borderWidth: '2px' }}>
        <div>
              <div>Content: {content}</div>
              
                { image && (
                  <img src={URL.createObjectURL(image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
                )}
                <div style={{color: currentUser === user && color }}>user: {user}</div>
        </div>
      </div>
      )}
    </UserContext.Consumer>
  )
}

export default Post