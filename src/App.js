import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Order from './Components/Dashboard/Order/Order';
import ClientServiceList from './Components/Dashboard/ClientServiceList/ClientServiceList';
import Review from './Components/Dashboard/Review/Review';
import AdminServiceList from './Components/Dashboard/AdminServiceList/AdminServiceList';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import { useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const AdminContext = createContext();
export const ServiceContext = createContext();
export const TitleContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isadmin, setIsAdmin] = useState({});
  const [services, setServices] = useState({
    id: ''
  });
  console.log(services);
  const [title, setTitle] = useState({});
  console.log(title);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <AdminContext.Provider value={[isadmin, setIsAdmin]}>
        <ServiceContext.Provider value={[services, setServices]}>
          <TitleContext.Provider value={[title, setTitle]}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/order/:id">
                  <Order />
                </PrivateRoute>
                <PrivateRoute path="/order">
                  <Order />
                </PrivateRoute>
                <Route path="/servicelist">
                  <ClientServiceList />
                </Route>
                <Route path="/review">
                  <Review />
                </Route>
                <PrivateRoute path="/adminservicelist">
                  <AdminServiceList />
                </PrivateRoute>
                <PrivateRoute path="/addservice">
                  <AddService />
                </PrivateRoute>
                <PrivateRoute path="/makeadmin">
                  <MakeAdmin />
                </PrivateRoute>
              </Switch>
            </Router>
          </TitleContext.Provider>
        </ServiceContext.Provider>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
