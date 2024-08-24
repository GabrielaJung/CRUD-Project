import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

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

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={() => <div>Home Page</div>} />
        </Routes> */}
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route exact path='/' element={<div>Home Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
