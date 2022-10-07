function postReducer(state, action) {
    switch (action.type) {
        case "ADD_POST": {
            console.log('post')
            const newPost = action.payload.post
            return { posts: [newPost, ...state.posts]}
        }
        case "DELETE_POST": {
            console.log('delete')
        
        }
        default:
            return state;

    }
}

export default postReducer; 