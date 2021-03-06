import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoogleBookClient from "./components/googleBookClient"
import BookDetail from "./components/bookDetail/BookDetail"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/authentication/SignUp";
import LogIn from "./components/authentication/LogIn";
import CreatePassword from "./components/authentication/CreatePassword";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/search"  component={GoogleBookClient}/>
            <Route exact path="/books/:bookId"  component={BookDetail}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/createpassword" component={CreatePassword}/>
        </div>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
