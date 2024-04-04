import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const Routes = () => {
  return (
    <div>
      <Router>

        <Link exact path='/' component={Home}/>
        <Link path='/about' component={About}/>

        {/* <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/> */}
      </Router>
    </div>
  );
};

export default Routes;
