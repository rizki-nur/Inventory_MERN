import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/homePage';
import AdminDashboard from './adminDashboard/adminDashboard';
import SignIn from './loginPage/SignIn';

function App() {
  // const student = ['Rizki', 'Erik', 'Dody'];
  // const [likes, setLikes] = useState(0);

  // const [addLikes, setAddlikes] = useState(0);
  
  // //latihan useState, handle, set / hook
  // function handleAddClick() {
  //   setLikes(likes + 1);
  // }

  // function handleMinClick() {
  //   setLikes(likes - 1)
  // }

  // function handleResetClick() {
  //   setLikes(0);
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path='auth' element={<SignIn/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path='admin' element={<AdminDashboard/>}/>
        </Routes>
      </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    //   <button onClick={handleAddClick}>+</button>
    //   <button onClick={handleMinClick}>-</button>
    //   <p>({likes})</p>
    //   <button onClick={handleResetClick}>Reset</button>
    // </div>
  );
}

export default App;
