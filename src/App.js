import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

import logo from './logo.svg';
import './App.css';
import {SideBar, Footer} from './components'

export default class App extends React.Component {
  render(){
    const items = [
      {path:"/portfolio/website1", text:"Website 1"},
      {path:"/portfolio/website2", text:"Website 2"},
      {path:"/portfolio/website3", text:"Website 3"},
      {path:"/portfolio/website4", text:"Website 4"},
      {path:"/portfolio/website5", text:"Website 5"},
      {path:"/portfolio/website6", text:"Website 6"},
      {path:"/portfolio/website7", text:"Website 7"},
      {path:"/portfolio/website8", text:"Website 8"},
    ]

    return(
      <div>
        <h1>React Developer Portfolio</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active" >Home</IndexLink></li>
          <li><Link to="/portfolio" activeClassName="active" >Portfolio</Link></li>
          <li><Link to="/about" activeClassName="active" >About me</Link></li>
          <li><Link to="/contact" activeClassName="active" >Contact</Link></li>
        </ul>
        <div className="container">
          <div className="sideBarContainer">
            <SideBar items={items}/>   
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>           
    )
  }
}















    
