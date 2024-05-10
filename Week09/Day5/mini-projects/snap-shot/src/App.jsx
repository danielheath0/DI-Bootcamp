import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import ImagePage from './components/ImagePage.jsx'

function App() {

  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/mountains" >Mountains</Link>
        <Link to="/beaches" >Beaches</Link>
        <Link to="/birds" >Birds</Link>
        <Link to="/food" >Food</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ImagePage key="home" query="home" per_page={30} />}></Route>
        <Route path='/mountains' element={<ImagePage key="mountains" query="mountains" per_page={30} />}></Route>
        <Route path='/beaches' element={<ImagePage key="beaches" query="beaches" per_page={30} />}></Route>
        <Route path='/birds' element={<ImagePage key="birds" query="birds" per_page={30} />}></Route>
        <Route path='/food' element={<ImagePage key="food" query="food" per_page={30} />}></Route>
        <Route path='/search/:query' element={<ImagePage key={Math.random()} per_page={30} />}></Route>

      </Routes>
    </>
  )
}

export default App
