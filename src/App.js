import { useEffect, useState } from 'react'
import Login from './components/Login';
import Header from './components/Header';

export const App = () => {
  const [user, setUser] = useState("")

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login'
    //user ?? 'Welcome' //user ? user : 'Welcome'
  }, [user])

  return (
    <>
    { !user ? <Login setUser={setUser} /> : <Header user={user} setUser={setUser} />}
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
