import React from 'react'

const PostList = ({posts}) => {
  return (
    <>
         { posts.map((post, index) => (
          <React.Fragment key={index}><p>
          {post.content}
          
            { post.image && (
              <img src={URL.createObjectURL(post.image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
            )}
            user: {post.user}
          </p>
          </React.Fragment>
        ))}
    </>    
  )
}

export default PostList