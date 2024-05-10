import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css'
import NavBar from './components/NavBar.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import ShopScreen from './components/ShopScreen.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import PostList from './components/PostList.jsx';
import SocialMedias from './components/Example1.jsx';
import Skills from './components/Example2.jsx';
import Experiences from './components/Example3.jsx';
import PostJson from './components/PostJson.jsx';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path='/profile' element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path='/shop' element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
      </Router>

      <PostList />
      <SocialMedias />
      <Skills />
      <Experiences />
      <PostJson />
    </>
  )
}

export default App


