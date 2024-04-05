import {Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Route from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </header>
      {/* <Route /> */}
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
      <h2>fewq</h2>
    </div>
  );
}

export default App