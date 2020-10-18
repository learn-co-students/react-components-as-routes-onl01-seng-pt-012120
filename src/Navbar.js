import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// basic styling for Navlinks
const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
  };

class Navbar extends Component {
    render() {
        return (
            <div>
                {['home', 'about', 'login'].map((string, index) => {
                    return(
                        <NavLink
                            key={index}
                            to={string === 'home'? '/' : `/${string}`} exact
                            style={link}
                            activeStyle={{background: 'darkblue'}}
                        >
                            {string.toLowerCase()}
                        </NavLink>
                    )
                })}
            </div>
        );
    }
}

export default Navbar;
