import React, { useEffect, useState, useCallback, useContext, createContext, useReducer } from 'react'
import Login from './components/Login';
import Header from './components/Header';
import ComposePost from './components/ComposePost';
import PostList from './components/PostList';

export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });

export const App = () => {
  const [user, setUser] = useState("")
  //const [posts, setPosts] = useState([]);

  const initialPostState = useContext(PostContext)
  const [state, dispatch] = useReducer(() => {}, initialPostState)

  // const addNewPost = useCallback(newPost => {
  //   setPosts([newPost, ...state.posts])
  // }, [state.posts])
  
  // const addNewPost = newPost => {
  //   setPosts([newPost, ...posts])
  // }

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login'
    //user ?? 'Welcome' //user ? user : 'Welcome'
  }, [user])

  const returnHeader =() => {
    return (
      <PostContext.Provider value={{state, dispatch}}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <ComposePost user={user} 
        // addNewPost={addNewPost} 
        />
        <PostList posts={state.posts}/>        
      </UserContext.Provider>    
      </PostContext.Provider>
    )
  }
  return (
    <>
    { !user ? <Login setUser={setUser} /> : returnHeader() }
    </>    
  )

  // if (!user) {
  //   return (<Login /> )
  // }

  // return ( <div>App</div> )



  // return (

    

  //   <div>App</div>
  // )
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
