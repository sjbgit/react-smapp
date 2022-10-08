function postReducer(state, action) {
    switch (action.type) {
        case "ADD_POST": {
            console.log('post')
            const newPost = action.payload.post
            return { posts: [newPost, ...state.posts]}
        }
        case "DELETE_POST": {
            console.log('delete')
            const user = action.payload.user
            const content = action.payload.content
            const id = action.payload.id
            const filteredPosts = state.posts.filter(p => p.id !== id);
            //const filteredPosts = state.posts.filter(p => p.content !== content);
            return { posts: filteredPosts }
        }
        default:
            return state;

    }
}

export default postReducer; 