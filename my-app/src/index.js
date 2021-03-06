import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Error404 from './pages/Error404/Error404'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import  store  from './utils/store';
import User from './pages/User/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<Error404 message="La page que vous demandez n'existe pas" />} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
