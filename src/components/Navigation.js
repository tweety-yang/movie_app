import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function  Navigation() {
  return(
    <div className="nav">
        <Link to="/">Home</Link>
        {/* a태그 대신에 Link를 씀,to는 주소(url)=href */}
        <Link to="/about">About</Link>
    </div>
  )
  
}

export default Navigation;