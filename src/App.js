import React from 'react'
import './App.css'
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Main from './views/Main'
import Login from './views/Login'
import PrivateRoute from './views/Main/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
          <Route component={Login}
              path="/login"
          ></Route>
          <PrivateRoute component={Main}
              path="/admin"
          ></PrivateRoute>
          <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  )
}

export default App
