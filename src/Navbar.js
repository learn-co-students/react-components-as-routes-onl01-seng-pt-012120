import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'black'
          }}
        >Login</NavLink>
        <NavLink
            to="/signup"
            exact
            style={link}
            activeStyle={{
                background: 'black'
            }}
            >SignUp</NavLink>
        <NavLink
            to="/messages"
            exact
            style={link}
            activeStyle={{
                background: 'black'
            }}
            >Messages</NavLink>
      </div>
    )
  }
}

export default Navbar; 