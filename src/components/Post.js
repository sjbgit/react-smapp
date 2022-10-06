import React from 'react'

const Post = ({post}) => {
  return (
    <div style={{borderStyle: 'solid', borderWidth: '2px' }}>
    <p>
          Content: {post.content}
          
            { post.image && (
              <img src={URL.createObjectURL(post.image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
            )}
            user: {post.user}
    </p>
    </div>
  )
}

export default Post