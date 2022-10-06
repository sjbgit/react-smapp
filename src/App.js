import React, { useEffect, useState } from 'react'
import Login from './components/Login';
import Header from './components/Header';
import ComposePost from './components/ComposePost';
import PostList from './components/PostList';


export const App = () => {
  const [user, setUser] = useState("")
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login'
    //user ?? 'Welcome' //user ? user : 'Welcome'
  }, [user])

  const returnHeader =() => {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <ComposePost user={user} setPosts={setPosts} />
        <PostList posts={posts}/>
        {/* { posts.map((post, index) => (
          <React.Fragment key={index}><p>
          {post.content}
          
            { post.image && (
              <img src={URL.createObjectURL(post.image)} alt="selected" style={{ height: 100, width: 200, objectFit: 'cover'}} />
            )}
          
          </p>
          </React.Fragment>
        ))} */}
      </>    
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
