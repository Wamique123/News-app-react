import React from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import { BrowserRouter as  Router, Routes, Route  } from 'react-router-dom'
const App = () => {
  return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/'element={<News />}/>
      </Routes>
      </Router>
      </div>
  )
}


export default App

