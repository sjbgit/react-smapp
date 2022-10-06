import React from 'react'

const Post = ({content, image, user}) => {
  return (
    <div style={{borderStyle: 'solid', borderWidth: '2px' }}>
    <p>
          Content: {content}
          
            { image && (
              <img src={URL.createObjectURL(image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
            )}
            user: {user}
    </p>
    </div>
  )
}

export default Post