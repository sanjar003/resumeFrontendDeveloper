import {BrowserRouter as Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Route from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      {/* <Route /> */}
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
