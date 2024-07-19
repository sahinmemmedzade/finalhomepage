import React from 'react';
import './App.css';
import SignupForm from './auth/signup';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './auth/login';
import ResendPassword from './auth/ResendPassword';
import NewsTicker from './homepage/newsticker';
import BottomDiv from './homepage/advertisiment';
import Sidebar from './sidebar.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar className="Sidebar" />
        {/* <BottomDiv className="BottomDiv" /> */}
        <Routes>
          <Route path='/newstricker' element={<NewsTicker />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/resendpassword" element={<ResendPassword />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
