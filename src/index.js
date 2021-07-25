import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink, } from "react-router-dom";


const linkStyles = {
  width: "100x",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return(
    <div>
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{background: "darkblue",
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to="/about"
      exact
      style={linkStyles}
      activeStyle={{background: "darkblue",
    }}
    >
      About
    </NavLink>
    <NavLink
    to="/login"
    exact
    style={linkStyles}
    activeStyle={{background: "darkblue",
  }}
  >
    Login
  </NavLink>
  <NavLink
  to="/messages"
  exact
  style={linkStyles}
  activeStyle={{background: "darkblue",
  }}
  >
  Messages
  </NavLink>
  <NavLink
  to="/signup"
  exact
  style={linkStyles}
  activeStyle={{background: "darkblue",
  }}
  >
  Signup
</NavLink>
  </div>
  );
}

function Signup(){
  return (
    <div>
      <h1>Signup!</h1>
    </div>
  );
}

function Messages(){
  return (
    <div>
      <h1>Messages!</h1>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About(){
  return (
    <div>
      <h1>This is my component!</h1>
    </div>
  );
}

function Login(){
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label> 
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/messages">
      <Messages />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"));
